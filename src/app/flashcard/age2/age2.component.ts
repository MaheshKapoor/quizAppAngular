import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-age2',
  templateUrl: './age2.component.html',
  styleUrls: ['./age2.component.css']
})
export class Age2Component implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    document.getElementById("seo-main-text").style.display = "none";
  }

}
