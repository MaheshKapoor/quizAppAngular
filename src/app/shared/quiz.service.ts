import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuizService {
  //---------------- Properties---------------
  readonly rootUrl = 'https://quizappservices-218109.appspot.com';//'https://quizappservices-218109.appspot.com';//http://localhost:8080';
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  isNextDisable=true;
  isSubmitDisable=true;
  numberOfQuestions: number;
  nextSet:string;
  previousSet:string;

  //---------------- Helper Methods---------------
  constructor(public http: HttpClient) { }
  displayTimeElapsed() {
    return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);
  }

  getParticipantName() {
    var participant = JSON.parse(localStorage.getItem('participant'));
    return participant.Name;
  }


  //---------------- Http Methods---------------

  insertParticipant(name: string, email: string, param: string) {
    var user = [name, email]
    return this.http.post(this.rootUrl + '/validateAccount', user, {params:{ 'id':param}});
  }

  getQuestions() {
    debugger;
    if (localStorage.getItem('id')){
      return this.http.get(this.rootUrl + '/questions', {params:{ 'id':'DKTNSW00E181003000'}});
    }else {
      return this.http.get(this.rootUrl + '/questions', {params: {'id': localStorage.getItem('id')}});
    }
  }


  getNextQuestions() {
    return this.http.get(this.rootUrl + '/questions', {params:{ 'id':localStorage.getItem('nextSet')}});
  }
  getPreviousQuestions() {
    return this.http.get(this.rootUrl + '/questions', {params:{ 'id':localStorage.getItem('questionSet')}});
  }

  getAnswers() {
    debugger;
    var body = this.qns.map(x => x.qnID);
    return this.http.post(this.rootUrl + '/answers', body, {params:{ 'id':localStorage.getItem('id')}});
  }

  submitScore() {
    var body = JSON.parse(localStorage.getItem('participant'));
    body.Score = this.correctAnswerCount;
    body.TimeSpent = this.seconds;
    return this.http.post(this.rootUrl + "/api/UpdateOutput", body);
  }

}
