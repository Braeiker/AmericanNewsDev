import { Component } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent {
  techDisplay: any[] = [];

  constructor(private _services: NewsApiServicesService) { }

  ngOnInit(): void {
    this._services.techDisplay().subscribe((result) => {
      console.log(result);
      this.techDisplay = result.articles;
    });
  }
}


