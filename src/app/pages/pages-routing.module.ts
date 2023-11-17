import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NewFilmsComponent } from './new-films/new-films.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'inicio', component: InicioComponent},
      {path: 'new-films', component: NewFilmsComponent},
      { path: '**', redirectTo:'dashboard' },
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
