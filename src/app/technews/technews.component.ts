import { Component,OnInit } from '@angular/core';
import { ArticlesserviceService } from "../services/articlesservice.service";

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {
    techDisplay:any[] = [];
    constructor(private _articleService:ArticlesserviceService){}

    ngOnInit(): void {

      this._articleService.techHeading().subscribe((result)=>{
        // this.topHeadDisplay = result.articles
        this.techDisplay = (result.articles as any[])
          .filter(item => item.urlToImage !== null && item.title !== '[Removed]');
      });
      
    }
}
