import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarPlazaModalComponent } from './validar-plaza-modal/validar-plaza-modal.component';
import { ValidarPracticasModalComponent } from './validar-practicas-modal/validar-practicas-modal.component';



@NgModule({
  declarations: [
    ValidarPlazaModalComponent,
    ValidarPracticasModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ValidarPlazaModalComponent,
    ValidarPracticasModalComponent
  ]
})
export class ModalsSupervisorModule { }
