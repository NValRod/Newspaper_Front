import { Component } from '@angular/core';
import { ArticlesserviceService } from '../services/articlesservice.service';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent {
  healthDisplay:any[] = [];
  constructor(private _articleService:ArticlesserviceService){}

  ngOnInit(): void {

    this._articleService.healthHeading().subscribe((result)=>{
      // this.topHeadDisplay = result.articles
      this.healthDisplay = (result.articles as any[])
        .filter(item => item.urlToImage !== null && item.title !== '[Removed]');
    });
    
  }
}
