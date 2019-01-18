import { Component, OnInit } from '@angular/core';
import {QuizService} from "../shared/quiz.service";

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  constructor(public quizService: QuizService,) { }

  ngOnInit() {
  }

  progressFactor = 100/this.quizService.numberOfQuestions;

}
