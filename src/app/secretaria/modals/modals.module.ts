import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarPostulanteComponent } from './agregar-postulante/agregar-postulante.component';
import { EditarPostulanteComponent } from './editar-postulante/editar-postulante.component';
import { ValidarSolicitudPendienteComponent } from './validar-solicitud-pendiente/validar-solicitud-pendiente.component';
import { MatButtonModule } from '@angular/material/button';
import { AgregarCartaPresentacionModalComponent } from './agregar-carta-presentacion-modal/agregar-carta-presentacion-modal.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgregarPostulanteComponent,
    EditarPostulanteComponent,
    ValidarSolicitudPendienteComponent,
    AgregarCartaPresentacionModalComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
    
  ],
  exports: [
    AgregarPostulanteComponent,
    EditarPostulanteComponent,
    ValidarSolicitudPendienteComponent,
    AgregarCartaPresentacionModalComponent
  ]
})
export class ModalsModule { }
