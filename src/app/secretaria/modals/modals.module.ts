import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarPostulanteComponent } from './agregar-postulante/agregar-postulante.component';
import { EditarPostulanteComponent } from './editar-postulante/editar-postulante.component';



@NgModule({
  declarations: [
    AgregarPostulanteComponent,
    EditarPostulanteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgregarPostulanteComponent,
    EditarPostulanteComponent
  ]
})
export class ModalsModule { }
