import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age1',
  templateUrl: './age1.component.html',
  styleUrls: ['./age1.component.css']
})
export class Age1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("seo-main-text").style.display = "none";
  }

}
