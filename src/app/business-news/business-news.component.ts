import { Component } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';
@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent {
  constructor(private _services: NewsApiServicesService) { }

  businessDisplay: any[] = [];

  ngOnInit(): void {
    this._services.businessDisplay().subscribe((result: { articles: any[]; }) => {
      console.log(result);
      this.businessDisplay = result.articles;
    });
  }
}

