import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import { HttpClientModule } from "@angular/common/http";
import { ArticlesserviceService } from "./services/articlesservice.service";
import { TechnewsComponent } from './technews/technews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SuscriptionComponent } from './suscription/suscription.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    SportnewsComponent,
    EntertainmentnewsComponent,
    HealthnewsComponent,
    SciencenewsComponent,
    BusinessnewsComponent,
    SuscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticlesserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
