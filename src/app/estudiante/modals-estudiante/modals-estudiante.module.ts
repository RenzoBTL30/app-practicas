import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleSolicitudModalComponent } from './detalle-solicitud-modal/detalle-solicitud-modal.component';
import { SubirDocumentosFinalizacionModalComponent } from './subir-documentos-finalizacion-modal/subir-documentos-finalizacion-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    DetalleSolicitudModalComponent,
    SubirDocumentosFinalizacionModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    DetalleSolicitudModalComponent,
    SubirDocumentosFinalizacionModalComponent
  ]
})
export class ModalsEstudianteModule { }
