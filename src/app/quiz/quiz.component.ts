import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../shared/quiz.service';
import {isEmpty} from "rxjs/operator/isEmpty";
import { ActivatedRoute } from '@angular/router';
import {DKTService} from "../service/dkt/dkt.service";
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']

})
export class QuizComponent implements OnInit {
  id: string;
  constructor(public router: Router, public quizService: QuizService,  public activeRoute: ActivatedRoute, public dktService: DKTService) {
    this.activeRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      localStorage.setItem('id',this.id);
    });}

  ngOnInit() {
    document.getElementById("seo-main-text").style.display = "none";
    if ((this.id === localStorage.getItem('current')) && localStorage.getItem('qns')) {

        this.quizService.seconds = 0;//parseInt(localStorage.getItem('seconds'));
        this.quizService.qnProgress = 0;// parseInt(localStorage.getItem('qnProgress'));
        this.quizService.numberOfQuestions = parseInt(localStorage.getItem('numberOfQuestion'));
        this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

        if (this.quizService.qnProgress == parseInt(localStorage.getItem('numberOfQuestion'))){
          this.router.navigate(['/result'], {queryParamsHandling:'preserve'});}
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
          this.quizService.numberOfQuestions=data.data.extraDetails.numberOfQuestion;
          this.quizService.qns = data.data.questions;
          this.hideLoadingSpinner();
          this.startTimer();
        }
      );
    }
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

  Answer(qID, choice) {
    debugger;
    this.quizService.isNextDisable = false;

    this.quizService.qns[this.quizService.qnProgress].selectedAnswer = choice;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));

    if(qID==this.quizService.numberOfQuestions){
      this.quizService.isSubmitDisable=false;
    }

  }

  NextQuestion(qID){
    if( typeof this.quizService.qns[this.quizService.qnProgress].selectedAnswer !== 'undefined' &&
      this.quizService.qns[this.quizService.qnProgress].selectedAnswer){
      this.quizService.qnProgress++;
      localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
      this.quizService.isNextDisable = true;
    }
  }

  submitQuiz(qId){
    if (qId == this.quizService.numberOfQuestions) {
      this.quizService.qnProgress++;
      localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
      this.quizService.isSubmitDisable=true;
    }
  }

  SkipQuestion(){
    this.quizService.qns[this.quizService.qnProgress].selectedAnswer = 6;
    localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
    this.quizService.qnProgress++;
    localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
    if (this.quizService.qnProgress == this.quizService.numberOfQuestions) {
      clearInterval(this.quizService.timer);
      this.router.navigate(['/result']);
    }
  }

}
