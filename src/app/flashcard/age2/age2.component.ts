import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age2',
  templateUrl: './age2.component.html',
  styleUrls: ['./age2.component.css']
})
export class Age2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("seo-main-text").style.display = "none";
  }

}
