import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesserviceService {

  constructor( private _http:HttpClient) { }

  articleApiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=67c5b9e2d6a74f6faaee49b288983f44";

  topHeading(): Observable<any>{
    return this._http.get(this.articleApiURL);
  }

}
