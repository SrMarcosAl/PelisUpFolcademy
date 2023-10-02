import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/routes/home/home.component';
import { MoviesComponent } from './Components/routes/movies/movies.component';
import { SeriesComponent } from './Components/routes/series/series.component';
import { IngresarComponent } from './Components/routes/ingresar/ingresar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'ingresar',
    component: IngresarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
