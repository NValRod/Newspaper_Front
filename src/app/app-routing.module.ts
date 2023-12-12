import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechnewsComponent } from './technews/technews.component';
import { SportnewsComponent } from './sportnews/sportnews.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SuscriptionComponent } from './suscription/suscription.component';

const routes: Routes = [

  {path:'', component: TopheadingComponent},
  {path:'tech', component: TechnewsComponent},
  {path:'sport', component: SportnewsComponent},
  {path:'entertainment', component: EntertainmentnewsComponent},
  {path:'health', component: HealthnewsComponent},
  {path:'science', component: SciencenewsComponent},
  {path:'business', component: BusinessnewsComponent},
  {path:'suscription', component: SuscriptionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
