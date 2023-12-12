import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesserviceService {

  private apiKey = "67c5b9e2d6a74f6faaee49b288983f44";
  private baseUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

  constructor(private _http: HttpClient) { }

  private makeRequest(urlSuffix: string): Observable<any> {
    const fullUrl = `${this.baseUrl}${this.apiKey}${urlSuffix}`;
    return this._http.get(fullUrl);
  }

  topHeading(): Observable<any> {
    return this.makeRequest('');
  }

  techHeading(): Observable<any> {
    return this.makeRequest('&category=technology');
  }

  sportHeading(): Observable<any> {
    return this.makeRequest('&category=sports');
  }

  entertainmentHeading(): Observable<any> {
    return this.makeRequest('&category=entertainment');
  }

  healthHeading(): Observable<any> {
    return this.makeRequest('&category=health');
  }

  scienceHeading(): Observable<any> {
    return this.makeRequest('&category=science');
  }

  businessHeading(): Observable<any> {
    return this.makeRequest('&category=business');
  }
}
