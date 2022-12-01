import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarSupervisorModalComponent } from './registrar-supervisor-modal/registrar-supervisor-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    RegistrarSupervisorModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    RegistrarSupervisorModalComponent
  ]
})
export class ModalsAdminModule { }
