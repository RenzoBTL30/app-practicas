import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { GestionarPostulantesComponent } from './gestionar-postulantes.component';
import { ModalsModule } from '../modals/modals.module';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatTooltipModule, _MatTooltipBase } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    GestionarPostulantesComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  imports: [
    CommonModule,
    ModalsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
  ],
  exports: [
    GestionarPostulantesComponent
  ]
})
export class GestionarPostulantesModule { }
