import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarCartaPresentacionComponent } from './agregar-carta-presentacion.component';
import { ModalsModule } from '../modals/modals.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AgregarCartaPresentacionComponent
  ],
  imports: [
    CommonModule,
    ModalsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ModalsModule
  ],
  exports: [
    AgregarCartaPresentacionComponent
  ]
})
export class AgregarCartaPresentacionModule { }
