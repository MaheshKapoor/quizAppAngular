import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("seo-main-text").style.display = "none";
  }

}
