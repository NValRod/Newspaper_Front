import { Component, OnInit } from '@angular/core';
import { ArticlesserviceService } from "../services/articlesservice.service";

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent {

  topHeadDisplay:any[] = [];
  constructor(private _articleService:ArticlesserviceService){}

  ngOnInit(): void {

    this._articleService.topHeading().subscribe((result)=>{
      console.log(result.articles);
      // this.topHeadDisplay = result.articles
      this.topHeadDisplay = (result.articles as any[])
        .filter(item => item.urlToImage !== null && item.title !== '[Removed]');
    });
    
  }
}
