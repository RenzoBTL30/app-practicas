import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteLayoutRoutingModule } from './estudiante-layout-routing.module';
import { EstudianteLayoutComponent } from './estudiante-layout.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { HomeEstudianteModule } from 'src/app/estudiante/home-estudiante/home-estudiante.module';


@NgModule({
  declarations: [
    EstudianteLayoutComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    HomeEstudianteModule,
    EstudianteLayoutRoutingModule
  ],
  exports: [
    EstudianteLayoutComponent
  ]
})
export class EstudianteLayoutModule { }
