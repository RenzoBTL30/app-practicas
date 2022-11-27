import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariaLayoutRoutingModule } from './secretaria-layout.routing';
import { SecretariaLayoutComponent } from './secretaria-layout.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalsModule } from 'src/app/secretaria/modals/modals.module';
import { HomeSecretariaModule } from 'src/app/secretaria/home/home-secretaria.module';
import { AgregarCartaPresentacionModule } from 'src/app/secretaria/agregar-carta-presentacion/agregar-carta-presentacion.module';
import { GestionarPostulantesModule } from 'src/app/secretaria/gestionar-postulantes/gestionar-postulantes.module';
import { ValidarSolicitudModule } from 'src/app/secretaria/validar-solicitud/validar-solicitud.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    SecretariaLayoutComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    SecretariaLayoutRoutingModule,
    FormsModule,
    MatTooltipModule,
    HomeSecretariaModule,
    ValidarSolicitudModule,
    ModalsModule
  ],
  exports: [
    SecretariaLayoutComponent
  ]
})
export class SecretariaLayoutModule { }
