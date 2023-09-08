import { Component } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent {
    sportDisplay: any[] = [];
  
    constructor(private _services: NewsApiServicesService) { }
  
    ngOnInit(): void {
      this._services.sportDisplay().subscribe((result) => {
        console.log(result);
        this.sportDisplay = result.articles;
      });
    }
  }
