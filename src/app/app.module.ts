import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarSolicitudComponent } from './estudiante/registrar-solicitud/registrar-solicitud.component';
import { RevisarSolicitudesComponent } from './estudiante/revisar-solicitudes/revisar-solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarSolicitudComponent,
    RevisarSolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
