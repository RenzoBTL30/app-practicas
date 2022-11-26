import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { RegistrarSolicitudComponent } from './registrar-solicitud.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RegistrarSolicitudComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    RouterModule,
    MatButtonModule
  ],
  exports: [
    RegistrarSolicitudComponent
  ]
})
export class RegistrarSolicitudModule { }
