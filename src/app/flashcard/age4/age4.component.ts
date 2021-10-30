import {Component, OnInit, Inject} from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";
//import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-age4',
  templateUrl: './age4.component.html',
  styleUrls: ['./age4.component.css']
})
export class Age4Component implements OnInit {

  constructor(public meta: Meta, public title: Title) { }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags(){
    this.title.setTitle("Age 4| Speech Therapy Flashcards for Speech Development at home");
    this.meta.updateTag(  {name: "description", content: "Free and Reusable digital flashcards for parents and professionals for speech therapy at home. Digital flashcards for speech development at age 4."});
    this.meta.updateTag(  {name : "keywords", content: "Free and Reusable digital flashcards, speech therapy, speech development, digital Flashcards, alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard"});
    this.meta.updateTag(  {property : "og:url", content: "https://practisepoint.com/age4speechdevelopment"});
    this.meta.updateTag(  {property : "og:image", content: "https://practisepoint.com/assets/img/age4speechbanner.png"});
    this.meta.updateTag(  {property : "og:description", content: "Free and Reusable digital flashcards for parents and professionals for speech therapy at home. Digital flashcards for speech development at age 4."});
    this.meta.updateTag(  {property : "og:title", content: "Age 4| Speech Therapy flashcards for Speech Development at home"});
  }

}
