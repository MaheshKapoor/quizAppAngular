import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Data} from "../../model/dkt/data";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DKTService {

  constructor(private http: HttpClient) {
    this.getDktData().subscribe(data => {
      console.log(data);
    });
  }

  public getDktData(): Observable<any> {
    const fileUrl = "../assets/json/dkt/"+localStorage.getItem('id')+".json";
    return this.http.get(fileUrl);
  }

}
