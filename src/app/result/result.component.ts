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
      this.router.navigate(['/quiz'], {queryParams: {id: localStorage.getItem('id')}});
  }


  OnSubmit() {
    this.quizService.submitScore().subscribe(() => {
      this.restart();
    });
  }

  getNextSet() {
    debugger;
    let nextSet = localStorage.getItem("nextSet");

    localStorage.removeItem("seconds");
    localStorage.removeItem("id");

    localStorage.removeItem("qns");
    localStorage.removeItem("qns");
    localStorage.removeItem("qnProgress");
    localStorage.removeItem("nextSet");
    localStorage.removeItem("previousNext");
    if (nextSet == null || nextSet == undefined ||nextSet == 'undefined'){
      this.router.navigate(['/dkt']);
    }else{
      localStorage.setItem('id', nextSet);
      this.router.navigate(['/quiz'], {queryParams:{ id: nextSet }});
    }
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

  fbShare() {
     /// let url = 'http://www.facebook.com/sharer.php?u='+ 'https://practisepoint.com/quiz?id=DKTNSW00E181003020';
      let url ="http://www.facebook.com/dialog/feed?app_id=694150900972156&display=popup&link=https://practisepoint.com/quiz?id="+localStorage.getItem("id");
      let newwindow=window.open(url,'challenge to my friends ','height=500,width=520,top=200,left=300,resizable');
      if (window.focus) {
        newwindow.focus()
      }
    }




}
