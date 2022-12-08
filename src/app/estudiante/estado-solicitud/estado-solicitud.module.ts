import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoSolicitudComponent } from './estado-solicitud.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ModalsEstudianteModule } from '../modals-estudiante/modals-estudiante.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EstadoSolicitudComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    ModalsEstudianteModule,
    FormsModule,
  ],
  exports: [EstadoSolicitudComponent],
})
export class EstadoSolicitudModule {}
