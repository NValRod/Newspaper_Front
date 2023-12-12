import { Component } from '@angular/core';
import { ArticlesserviceService } from '../services/articlesservice.service';

@Component({
  selector: 'app-entertainmentnews',
  templateUrl: './entertainmentnews.component.html',
  styleUrls: ['./entertainmentnews.component.css']
})
export class EntertainmentnewsComponent {

  entertainmentDisplay:any[] = [];
  constructor(private _articleService:ArticlesserviceService){}

  ngOnInit(): void {

    this._articleService.entertainmentHeading().subscribe((result)=>{
      // this.topHeadDisplay = result.articles
      this.entertainmentDisplay = (result.articles as any[])
        .filter(item => item.urlToImage !== null && item.title !== '[Removed]');
    });
    
  }
}
