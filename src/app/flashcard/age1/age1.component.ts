import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-age1',
  templateUrl: './age1.component.html',
  styleUrls: ['./age1.component.css']
})
export class Age1Component implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    document.getElementById("seo-main-text").style.display = "none";
  }

}
