import {Questions} from "./questions";
import {ExtraDetails} from "./extraDetails";
export class Data {

  questions: Questions;
  extraDetails: ExtraDetails;

  constructor(questions: Questions, extraDetails: ExtraDetails){
    this.questions = questions;
    this.extraDetails = extraDetails;
  }
}
