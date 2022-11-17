import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { GestionarPostulantesComponent } from './gestionar-postulantes.component';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    GestionarPostulantesComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule
  ],
  exports: [
    GestionarPostulantesComponent
  ]
})
export class GestionarPostulantesModule { }
