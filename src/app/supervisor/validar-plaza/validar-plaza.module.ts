import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarPlazaComponent } from './validar-plaza.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    ValidarPlazaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports: [
    ValidarPlazaComponent
  ]
})
export class ValidarPlazaModule { }
