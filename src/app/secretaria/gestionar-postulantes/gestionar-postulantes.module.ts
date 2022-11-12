import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarPostulantesComponent } from './gestionar-postulantes.component';
import { ModalsModule } from '../modals/modals.module';

@NgModule({
  declarations: [
    GestionarPostulantesComponent
  ],
  imports: [
    CommonModule,
    ModalsModule
  ],
  exports: [
    GestionarPostulantesComponent
  ]
})
export class GestionarPostulantesModule { }
