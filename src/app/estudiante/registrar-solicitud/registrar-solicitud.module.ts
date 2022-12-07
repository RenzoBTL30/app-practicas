import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { RegistrarSolicitudComponent } from './registrar-solicitud.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistrarSolicitudComponent],
  imports: [
    CommonModule,
    ElementosModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [RegistrarSolicitudComponent],
})
export class RegistrarSolicitudModule {}
