import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NoPageFoundComponent,
    HeaderComponent,
    SecondHeaderComponent,
  ],
  exports: [NoPageFoundComponent,
            HeaderComponent,
            SecondHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ]
})
export class ComponentsModule { }
