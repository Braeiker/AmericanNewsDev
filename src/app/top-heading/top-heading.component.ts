import { Component, OnInit } from '@angular/core';
import { NewsApiServicesService } from '../service/news-api-services.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {
  topHeadingDisplay: any[] = [];

  constructor(private _services: NewsApiServicesService) { }

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    });
  }
}