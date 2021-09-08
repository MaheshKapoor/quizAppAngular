import { Component, OnInit } from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-age3',
  templateUrl: './age3.component.html',
  styleUrls: ['./age3.component.css']
})
export class Age3Component implements OnInit {

  constructor(public meta: Meta, public title: Title) { }

  ngOnInit() {
    //document.getElementById("seo-main-text").style.display = "none";
    this.updateMetaTags();
  }

  updateMetaTags(){
    this.title.setTitle("Speech development Age 3");
    this.meta.updateTag(  {name: "description", content: "Digital flashcards for speech development, speech improvement and speech therapy. Digital flashcards for kids at age 3."});
    this.meta.updateTag(  {name : "keywords", content: "Digital Flashcards,  alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard"});
    this.meta.updateTag(  {property : "og:url", content: "https://practisepoint.com/age3speechdevelopment"});
    this.meta.updateTag(  {property : "og:image", content: "https://practisepoint.com/assets/img/age3speechbanner.png"});
    this.meta.updateTag(  {property : "og:description", content: "Digital flashcards for speech development, speech improvement and speech therapy. Digital flashcards for kids at age 3."});
    this.meta.updateTag(  {property : "og:title", content: "Speech development Age 3"});
  }

}

