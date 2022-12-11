import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarPlazaComponent } from './validar-plaza.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ModalsSupervisorModule } from '../modals-supervisor/modals-supervisor.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ValidarPlazaComponent],
  imports: [
    CommonModule,
    ModalsSupervisorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
  ],
  exports: [ValidarPlazaComponent],
})
export class ValidarPlazaModule {}
