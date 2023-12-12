import { Component } from '@angular/core';
import { ArticlesserviceService } from '../services/articlesservice.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent {

  scienceDisplay:any[] = [];
  constructor(private _articleService:ArticlesserviceService){}

  ngOnInit(): void {

    this._articleService.scienceHeading().subscribe((result)=>{
      // this.topHeadDisplay = result.articles
      this.scienceDisplay = (result.articles as any[])
        .filter(item => item.urlToImage !== null && item.title !== '[Removed]');
    });
    
  }
}
