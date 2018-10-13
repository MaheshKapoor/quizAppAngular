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
      this.router.navigate(['/quiz'], {id: localStorage.getItem('id')});
  }


  OnSubmit() {
    this.quizService.submitScore().subscribe(() => {
      this.restart();
    });
  }

  getNextSet() {
    debugger;
    localStorage.removeItem("seconds");
    localStorage.removeItem("id");
    localStorage.setItem('id', localStorage.getItem("nextSet"));
    localStorage.removeItem("qns");
    localStorage.removeItem("qns");
    localStorage.removeItem("qnProgress");
    localStorage.removeItem("nextSet");
    localStorage.removeItem("previousNext");
    this.router.navigate(['/quiz'], {queryParams:{ id: localStorage.getItem("id") }});

  }

  getPreviousSet() {
    debugger;
    localStorage.removeItem("seconds");
    localStorage.removeItem("id");
    localStorage.setItem('id', localStorage.getItem("previousNext"));
    localStorage.removeItem("qns");
    localStorage.removeItem("qns");
    localStorage.removeItem("qnProgress");
    localStorage.removeItem("nextSet");
    localStorage.removeItem("previousNext");
    this.router.navigate(['/quiz'], {queryParams:{ id: localStorage.getItem("id") }});

  }



  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }


}
