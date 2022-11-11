import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevisarSolicitudesModule } from './estudiante/revisar-solicitudes/revisar-solicitudes.module';
import { RegistrarSolicitudModule } from './estudiante/registrar-solicitud/registrar-solicitud.module';
import { ValidarSolicitudModule } from './secretaria/validar-solicitud/validar-solicitud.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeSecretariaModule } from './secretaria/home/home-secretaria.module';

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
    HomeSecretariaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
