import {Component, OnInit, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-age4',
  templateUrl: './age4.component.html',
  styleUrls: ['./age4.component.css']
})
export class Age4Component implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    document.getElementById("seo-main-text").style.display = "none";
  }

}
