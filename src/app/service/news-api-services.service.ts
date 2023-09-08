import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServicesService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c3e99250a5c34addaa955a4041a9a078';

  TechApi = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=c3e99250a5c34addaa955a4041a9a078';

  BusinessApi = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c3e99250a5c34addaa955a4041a9a078';

  SportApi = 'https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=c3e99250a5c34addaa955a4041a9a078';

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
  techDisplay(): Observable<any> {
    return this._http.get(this.TechApi);
  }
  businessDisplay():Observable<any> {
    return this._http.get(this.BusinessApi);
  }
  sportDisplay(): Observable<any> {
    return this._http.get(this.SportApi);
  }
}


