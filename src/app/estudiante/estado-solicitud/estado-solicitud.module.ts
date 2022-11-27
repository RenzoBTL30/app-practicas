import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoSolicitudComponent } from './estado-solicitud.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    EstadoSolicitudComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    EstadoSolicitudComponent
  ]
})
export class EstadoSolicitudModule { }
