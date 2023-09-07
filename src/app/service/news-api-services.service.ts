import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsApiServicesService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c3e99250a5c34addaa955a4041a9a078';

  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }
}
