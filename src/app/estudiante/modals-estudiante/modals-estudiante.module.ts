import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleSolicitudModalComponent } from './detalle-solicitud-modal/detalle-solicitud-modal.component';
import { SubirDocumentosFinalizacionModalComponent } from './subir-documentos-finalizacion-modal/subir-documentos-finalizacion-modal.component';



@NgModule({
  declarations: [
    DetalleSolicitudModalComponent,
    SubirDocumentosFinalizacionModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModalsEstudianteModule { }
