import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSolicitudComponent } from './menu-solicitud.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuSolicitudComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuSolicitudComponent
  ]
})
export class MenuSolicitudModule { }
