import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age4',
  templateUrl: './age4.component.html',
  styleUrls: ['./age4.component.css']
})
export class Age4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("seo-main-text").style.display = "none";
  }

}
