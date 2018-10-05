import { Component, OnInit } from '@angular/core';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id: string;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(public quizService : QuizService,public route : Router, public activeRoute: ActivatedRoute) {
debugger;
      this.activeRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      localStorage.setItem('id',this.id);
    });
  }

  ngOnInit() {
  }

  OnSubmit(name:string,email:string){
    this.quizService.insertParticipant(name,email, this.id).subscribe(
      (data : any) =>{
        localStorage.setItem('participant',JSON.stringify(data));
        if(data.validUser){
          this.route.navigate(['/quiz']);
        }else{
          this.route.navigate(['/register']);
        }

      }
    );
  }

}
