import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarSupervisoresComponent } from './gestionar-supervisores.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { ModalsAdminModule } from '../modals-admin/modals-admin.module';



@NgModule({
  declarations: [
    GestionarSupervisoresComponent
  ],
  imports: [
    CommonModule,
    ModalsAdminModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports: [
    GestionarSupervisoresComponent
  ]
})
export class GestionarSupervisoresModule { }
