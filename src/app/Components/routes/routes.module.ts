import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { IngresarComponent } from './ingresar/ingresar.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    IngresarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RoutesModule { }
