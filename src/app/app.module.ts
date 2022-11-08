import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarSolicitudComponent } from './estudiante/registrar-solicitud/registrar-solicitud.component';
import { RevisarSolicitudesComponent } from './estudiante/revisar-solicitudes/revisar-solicitudes.component';
import { DetalleSolicitudComponent } from './estudiante/revisar-solicitudes/detalle-solicitud/detalle-solicitud.component';
import { ElementosModule } from './elementos/elementos.module';
import { ValidarSolicitudComponent } from './estudiante/validar-solicitud/validar-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarSolicitudComponent,
    RevisarSolicitudesComponent,
    DetalleSolicitudComponent,
    ValidarSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
