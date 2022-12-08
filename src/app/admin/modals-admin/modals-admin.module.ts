import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarSupervisorModalComponent } from './registrar-supervisor-modal/registrar-supervisor-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditarSupervisorModalComponent } from './editar-supervisor-modal/editar-supervisor-modal.component';


@NgModule({
  declarations: [
    RegistrarSupervisorModalComponent,
    EditarSupervisorModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    RegistrarSupervisorModalComponent,
    EditarSupervisorModalComponent
  ]
})
export class ModalsAdminModule { }
