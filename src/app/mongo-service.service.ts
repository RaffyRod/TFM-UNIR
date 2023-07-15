import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoServiceService {

  constructor(public http: HttpClient) { }

  getRecetas(){
    let url = "https://us-east-1.aws.data.mongodb-api.com/app/application-1-uufbc/endpoint/recetas";
    return new Promise(resolve=>{
      this.http.get(url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
  getDashBoard(){
    let url = "https://us-east-1.aws.data.mongodb-api.com/app/application-1-uufbc/endpoint/dashboard";
    return new Promise(resolve=>{
      this.http.get(url).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
}
