import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RevisarSolicitudesComponent } from './revisar-solicitudes.component';
import { DetalleSolicitudComponent } from './detalle-solicitud/detalle-solicitud.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RevisarSolicitudesComponent,
    DetalleSolicitudComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports:[
    RevisarSolicitudesComponent,
    DetalleSolicitudComponent
  ]
})
export class RevisarSolicitudesModule { }
