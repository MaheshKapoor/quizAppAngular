import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../../shared/quiz.service';
//import {isEmpty} from "rxjs/operator/isEmpty";
import { ActivatedRoute } from '@angular/router';
import {DKTService} from "../../service/dkt/dkt.service";
import {Meta, Title} from "@angular/platform-browser";
@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']

})
export class FlashCardComponent implements OnInit {
  id: string;
  constructor(public router: Router, public quizService: QuizService, public activeRoute: ActivatedRoute,
              public dktService: DKTService, public meta: Meta, public title: Title) {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      localStorage.setItem('id',this.id);
    });}

  ngOnInit() {
    if ((this.id === localStorage.getItem('current')) && localStorage.getItem('qns')) {

      this.quizService.seconds = 0;//parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = 0;// parseInt(localStorage.getItem('qnProgress'));
      this.quizService.numberOfQuestions = parseInt(localStorage.getItem('numberOfQuestion'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

      if (this.quizService.qnProgress == parseInt(localStorage.getItem('numberOfQuestion'))){
        this.router.navigate(['/speechdevelopment'], {queryParamsHandling:'preserve'});}
      else{
        this.startTimer();
      }
    }
    else {
      localStorage.setItem('current',this.id);
      this.showLoadingSpinner();
      this.quizService.seconds = 0;
      this.quizService.qnProgress = 0;
      this.dktService.getDktData().subscribe(
        (data: any) => {
          localStorage.setItem('nextSet',data.data.extraDetails.nextSet);
          localStorage.setItem('previousNext',data.data.extraDetails.previousSet);
          localStorage.setItem('numberOfQuestion',data.data.extraDetails.numberOfQuestion);
          localStorage.setItem('pageTitle', data.data.extraDetails.quizTitle);
          this.quizService.numberOfQuestions=data.data.extraDetails.numberOfQuestion;
          this.quizService.qns = this.shuffleArray(data.data.questions);
          this.shuffleArray(['a', 'b', 'c']);
          this.updateMetaTags();
          this.hideLoadingSpinner();
          this.startTimer();
        }
      );
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  updateMetaTags(){
    this.title.setTitle(localStorage.getItem("pageTitle"));
    this.meta.updateTag( {name: "description", content: localStorage.getItem("pageTitle") + "-Actual DKT full Practice test.Tips to pass DKT test in first attempt."});
  }
  showLoadingSpinner() {
    this.quizService.showSpinner = true;
  }

  hideLoadingSpinner() {
    this.quizService.showSpinner = false;
  }

  startTimer() {
    this.quizService.timer = setInterval(() => {
      this.quizService.seconds++;
      localStorage.setItem('seconds', this.quizService.seconds.toString());
    }, 1000);
  }

  submitQuiz(qId){
    if (qId == this.quizService.numberOfQuestions) {
      this.quizService.qnProgress++;
      localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
      clearInterval(this.quizService.timer);
      if(this.id && (this.id.slice(0,4)=== "AGE3")){
        this.router.navigate(['/age3speechdevelopment']);
      } else if(this.id && (this.id.slice(0,4)=== "AGE2")){
        this.router.navigate(['/age2speechdevelopment']);
      } else if(this.id && (this.id.slice(0,4)=== "AGE1")) {
        this.router.navigate(['/speechdevelopment']);
      } else{
        this.router.navigate(['/speechdevelopment']);
      }

      this.quizService.isSubmitDisable=true;
    }
  }

  SkipQuestion(){
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    if(this.quizService.qnProgress == this.quizService.numberOfQuestions-1){
      this.quizService.isSubmitDisable=false;
    }
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == this.quizService.numberOfQuestions) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/speechdevelopment']);
    }
  }

}
