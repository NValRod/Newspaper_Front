import { Component } from '@angular/core';
import { ArticlesserviceService } from '../services/articlesservice.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent {
  businessDisplay:any[] = [];
  constructor(private _articleService:ArticlesserviceService){}

  ngOnInit(): void {

    this._articleService.scienceHeading().subscribe((result)=>{
      // this.topHeadDisplay = result.articles
      this.businessDisplay = (result.articles as any[])
        .filter(item => item.urlToImage !== null && item.title !== '[Removed]');
    });
    
  }
}
