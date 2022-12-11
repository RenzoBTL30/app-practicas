import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarPlazaModalComponent } from './validar-plaza-modal/validar-plaza-modal.component';
import { ValidarPracticasModalComponent } from './validar-practicas-modal/validar-practicas-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ValidarPlazaModalComponent, ValidarPracticasModalComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [ValidarPlazaModalComponent, ValidarPracticasModalComponent],
})
export class ModalsSupervisorModule {}
