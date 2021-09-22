import {Component, OnInit, Inject} from '@angular/core';
//import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //document.getElementById("seo-main-text").style.display = "none";
  }

}
