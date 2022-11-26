import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoSolicitudComponent } from './estado-solicitud.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EstadoSolicitudComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    EstadoSolicitudComponent
  ]
})
export class EstadoSolicitudModule { }
