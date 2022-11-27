import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarSupervisoresComponent } from './gestionar-supervisores.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    GestionarSupervisoresComponent
  ],
  imports: [
    CommonModule,
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
