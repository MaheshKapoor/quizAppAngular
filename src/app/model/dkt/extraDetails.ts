

export class ExtraDetails {

  quizTitle       : string;
  previousSet     : string;
  nextSet         : string;
  numberOfQuestion: string;
  keywords        : string;
  description     : string;
  url             : string;
  imageUrl        : string;

  constructor( quizTitle: string, previousSet: string, nextSet: string, numberOfQuestion: string){
    this.quizTitle = quizTitle;
    this.previousSet = previousSet;
    this.nextSet = nextSet;
    this.numberOfQuestion = numberOfQuestion;

  }
}
