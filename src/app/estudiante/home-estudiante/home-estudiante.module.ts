import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEstudianteComponent } from './home-estudiante.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeEstudianteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeEstudianteComponent
  ]
})
export class HomeEstudianteModule { }
