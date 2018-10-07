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

      this.quizService.getAnswers().subscribe(
        (data: any) => {
          this.quizService.correctAnswerCount = 0;
          this.quizService.qns.forEach((e, i) => {
            if (e.answer == data[i])
              this.quizService.correctAnswerCount++;
            e.correct = data[i];
          });
        }
      );
    }
    else
      this.router.navigate(['/quiz']);
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
    this.router.navigate(['/quiz']);

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
    this.router.navigate(['/quiz']);

  }



  restart() {
    localStorage.setItem('qnProgress', "0");
    localStorage.setItem('qns', "");
    localStorage.setItem('seconds', "0");
    this.router.navigate(['/quiz']);
  }


}
