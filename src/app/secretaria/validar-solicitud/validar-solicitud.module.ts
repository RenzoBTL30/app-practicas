import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarSolicitudComponent } from './validar-solicitud.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { ModalsModule } from '../modals/modals.module';



@NgModule({
  declarations: [
    ValidarSolicitudComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    ModalsModule
  ],
  exports: [
    ValidarSolicitudComponent
  ]
})
export class ValidarSolicitudModule { }
