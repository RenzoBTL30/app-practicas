import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { GestionarSupervisoresModule } from 'src/app/admin/gestionar-supervisores/gestionar-supervisores.module';


@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    GestionarSupervisoresModule,
    AdminLayoutRoutingModule
  ],
  exports: [
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule { }
