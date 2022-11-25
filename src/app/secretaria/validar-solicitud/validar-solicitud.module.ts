import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarSolicitudComponent } from './validar-solicitud.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { ModalsModule } from '../modals/modals.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    ValidarSolicitudComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    ModalsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports: [
    ValidarSolicitudComponent
  ]
})
export class ValidarSolicitudModule { }
