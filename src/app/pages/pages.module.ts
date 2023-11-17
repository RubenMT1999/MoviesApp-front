import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { MatIconModule } from '@angular/material/icon';
import { FilmComponent } from './film/film.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { NewFilmsComponent } from './new-films/new-films.component';


@NgModule({
  declarations: [DashboardComponent, InicioComponent, FilmComponent, NewFilmsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    PipesModule,
  ],
  exports: [DashboardComponent]
})
export class PagesModule { }
