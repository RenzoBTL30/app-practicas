import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevisarSolicitudesModule } from './estudiante/revisar-solicitudes/revisar-solicitudes.module';
import { RegistrarSolicitudModule } from './estudiante/registrar-solicitud/registrar-solicitud.module';
import { ValidarSolicitudModule } from './estudiante/validar-solicitud/validar-solicitud.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RevisarSolicitudesModule,
    RegistrarSolicitudModule,
    ValidarSolicitudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
