import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public quizService : QuizService,public router : Router) { }

  ngOnInit() {
  }

  SignOut() {
    localStorage.removeItem("seconds");
    //localStorage.removeItem("id");
    //localStorage.setItem('id', localStorage.getItem("previousNext"));
    //localStorage.removeItem("qns");
    //localStorage.removeItem("qns");
    //localStorage.removeItem("qnProgress");
    //localStorage.removeItem("nextSet");
    //localStorage.removeItem("previousNext");
   // clearInterval(this.quizService.timer);
    window.location.reload();
    //this.router.navigate(['/quiz'], {queryParams:{ id: localStorage.getItem("id") }});
  }

}
