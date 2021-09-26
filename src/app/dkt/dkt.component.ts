import { Component, OnInit } from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-dkt',
  templateUrl: './dkt.component.html',
  styleUrls: ['./dkt.component.css']
})
export class DktComponent implements OnInit {

  constructor(public meta: Meta, public title: Title) {
  }

  ngOnInit() {
    this.updateMetaTags();
  }


  updateMetaTags() {
    this.title.setTitle("How to pass Driving Knowledge Test(DKT) in the first attempt with practise point?");
    this.meta.updateTag({
      name: "description",
      content: "Pass Driving Knowledge Test(DKT) in the first attempt with best online dkt practice test. We are presenting dkt practice questions in simple way to understand the driving knowledge required to pass dkt in first attempt."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "Pass DKT Test, dkt practice test, dkt practise test, driver knowledge test questions nsw, driving test questions and answers free, 45 questions driving test,dkt 2022, dkt 2021, free dkt test, how to pass dkt, dkt in first attempt, all dkt questions and answers"
    });
    this.meta.updateTag({property: "og:url", content: "https://practisepoint.com/dkt"});
    this.meta.updateTag({property: "og:image", content: "https://practisepoint.com/assets/img/practisepoint_main.jpg"});
    this.meta.updateTag({
      property: "og:description",
      content: "Pass Driving Knowledge Test(DKT) in the first attempt with best online dkt practice test. We are presenting dkt practise questions in simple way to understand the driving knowledge required to pass dkt test in first attempt."
    });
    this.meta.updateTag({property: "og:title", content: "How to pass Driving Knowledge Test(DKT) in the first attempt with practise point?"});
    //this.meta.updateTag({property: "og:updated_time" , content: "SOLVED:How to pass Driving Knowledge Test(DKT) in first attempt?"});
  }


}
