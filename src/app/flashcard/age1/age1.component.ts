import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-age1',
  templateUrl: './age1.component.html',
  styleUrls: ['./age1.component.css']
})
export class Age1Component implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Age 18 months| Speech Therapy Flashcards for Speech Development at home");
    this.meta.updateTag({
      name: "description",
      content: "Digital flashcards for early speech development, speech improvement and speech therapy used by professionals and parents at home. Language development flashcards for kids at age 18 months."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Digital Flashcards,  alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard"
    });
    this.meta.updateTag({property: "og:url", content: "https://practisepoint.com/age3speechdevelopment"});
    this.meta.updateTag({property: "og:image", content: "https://practisepoint.com/assets/img/age2speechbanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Digital flashcards for speech development, speech improvement and speech therapy used by professionals and parents at home. Digital flashcards for kids at age 1."
    });
    this.meta.updateTag({property: "og:title", content: "Age 18 months| Speech Therapy flashcards for Speech Development"});
  }

}
