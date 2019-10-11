

export class Questions {

  qn: string;
  qnId: string;
  answer: string;
  imageName: string;
  options: string[];
  constructor( qn: string, qnId: string, answer: string, imageName: string, options: string[]){
    this.qn = qn;
    this.qnId = qnId;
    this.answer = answer;
    this.imageName = imageName;
    this.options = options;

  }
}
