import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevisarSolicitudesComponent } from './estudiante/revisar-solicitudes/revisar-solicitudes.component';
import { DetalleSolicitudComponent } from './estudiante/revisar-solicitudes/detalle-solicitud/detalle-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    RevisarSolicitudesComponent,
    DetalleSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
