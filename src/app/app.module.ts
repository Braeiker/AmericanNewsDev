import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { HttpClientModule } from '@angular/common/http'; 
import { NewsApiServicesService } from './service/news-api-services.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    NavbarComponent,
    TechNewsComponent,
    BusinessNewsComponent,
    SportNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [NewsApiServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
