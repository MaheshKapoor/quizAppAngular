import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.css']
})
export class SpeechComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, public meta: Meta, public title: Title) { }

  ngOnInit() {
    //document.getElementById("seo-main-text").style.display = "none";
    this.updateMetaTags();
  }

  updateMetaTags(){
    this.title.setTitle("Speech development in kids");
    this.meta.updateTag(  {name: "description", content: "Speech development, speech improvement and speech therapy for kids age 1, 2, 3, 4, 5.. Digital flash cards to improve english vocabulary"});
    this.meta.updateTag(  {name : "keywords", content: "Speech development, speech improvement, speech therapy, age 1, age 2, age 3, age 4, age 5, Digital Flashcards,  alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard"});
    this.meta.updateTag(  {property : "og:url", content: "https://practisepoint.com/speechdevelopment"});
    this.meta.updateTag(  {property : "og:image", content: "https://practisepoint.com/assets/img/speechdevelopmentbanner.jpg"});
    this.meta.updateTag(  {property : "og:description", content: "Speech development, speech improvement and speech therapy for kids age 1, 2, 3, 4, 5. Digital flash cards to improve english vocabulary"});
    this.meta.updateTag(  {property : "og:title", content: "Speech development in kids"});
  }

}
