import { Component, OnInit } from '@angular/core';
import { ArticlesserviceService } from '../services/articlesservice.service';

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent {

  sportDisplay:any[] = [];
  constructor(private _articleService:ArticlesserviceService){}

  ngOnInit(): void {

    this._articleService.sportHeading().subscribe((result)=>{
      // this.topHeadDisplay = result.articles
      this.sportDisplay = (result.articles as any[])
        .filter(item => item.urlToImage !== null && item.title !== '[Removed]');
    });
    
  }
}
