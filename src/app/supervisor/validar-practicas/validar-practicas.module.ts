import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarPracticasComponent } from './validar-practicas.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ModalsSupervisorModule } from '../modals-supervisor/modals-supervisor.module';


@NgModule({
  declarations: [
    ValidarPracticasComponent
  ],
  imports: [
    CommonModule,
    ModalsSupervisorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule

  ],
  exports: [
    ValidarPracticasComponent
  ]
})
export class ValidarPracticasModule { }