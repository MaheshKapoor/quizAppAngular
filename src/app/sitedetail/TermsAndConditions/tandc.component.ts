import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'tandc',
  templateUrl: './tandc.component.html',
  styleUrls: ['./tandc.component.css']
})
export class TandCComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.title.setTitle("Terms and Conditions - Practise Point");
    this.meta.updateTag({
      name: "description",
      content: "Terms and Conditions - Practise Point"
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Digital Flashcards,  alphabets flashcard, numbers flashcard, fruits flashcard, vegetables flashcard, weathers flashcard, shapes flashcard, colors flashcard, transportation flashcard, animals flashcard, gestures flashcard, clothes flashcard, food flashcard, family flashcard, birds flashcard, plants flashcard"
    });
    this.meta.updateTag({property: "og:url", content: "https://practisepoint.com/termsandconditions"});
    this.meta.updateTag({property: "og:image", content: "https://practisepoint.com/assets/img/age2speechbanner.png"});
    this.meta.updateTag({
      property: "og:description",
      content: "Terms and Conditions - Practise Point"
    });
    this.meta.updateTag({property: "og:title", content: "Terms and Conditions - Practise Point"});
  }

}
