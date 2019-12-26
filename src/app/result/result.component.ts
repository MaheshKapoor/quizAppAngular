import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {



  constructor(public quizService: QuizService, public router: Router) { }

  ngOnInit() {
    //document.getElementById("seo-main-text").style.display = "none";
    if (parseInt(localStorage.getItem('qnProgress')) == this.quizService.numberOfQuestions) {
      this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
      this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
      this.quizService.qns = JSON.parse(localStorage.getItem('qns'));

          debugger;
          this.quizService.correctAnswerCount = 0;
          for(let e of this.quizService.qns){
            if (e.answer == e.selectedAnswer)
              this.quizService.correctAnswerCount++;
          }
    }
    else
      this.router.navigate(['/quiz'], {queryParams: {id: localStorage.getItem('id')}});
  }


  OnSubmit() {
    this.quizService.submitScore().subscribe(() => {
      this.restart();
    });
  }





  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }






}
