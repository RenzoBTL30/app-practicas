import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { RegistrarSolicitudComponent } from './registrar-solicitud.component';



@NgModule({
  declarations: [
    RegistrarSolicitudComponent
  ],
  imports: [
    CommonModule,
    ElementosModule
  ],
  exports: [
    RegistrarSolicitudComponent
  ]
})
export class RegistrarSolicitudModule { }