import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleSolicitudModalComponent } from './detalle-solicitud-modal/detalle-solicitud-modal.component';
import { SubirDocumentosFinalizacionModalComponent } from './subir-documentos-finalizacion-modal/subir-documentos-finalizacion-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditarSolicitudComponentComponent } from './editar-solicitud-component/editar-solicitud-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetalleSolicitudModalComponent,
    SubirDocumentosFinalizacionModalComponent,
    EditarSolicitudComponentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    DetalleSolicitudModalComponent,
    SubirDocumentosFinalizacionModalComponent,
    EditarSolicitudComponentComponent
  ]
})
export class ModalsEstudianteModule { }
