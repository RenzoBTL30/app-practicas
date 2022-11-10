import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevisarSolicitudesModule } from './estudiante/revisar-solicitudes/revisar-solicitudes.module';
import { RegistrarSolicitudComponent } from './estudiante/registrar-solicitud/registrar-solicitud.component';
import { ElementosModule } from './elementos/elementos.module';
import { ValidarSolicitudComponent } from './estudiante/validar-solicitud/validar-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarSolicitudComponent,
    ValidarSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RevisarSolicitudesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
