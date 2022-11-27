import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCartaPresentacionComponent } from 'src/app/secretaria/agregar-carta-presentacion/agregar-carta-presentacion.component';
import { GestionarPostulantesComponent } from 'src/app/secretaria/gestionar-postulantes/gestionar-postulantes.component';
import { HomeSecretariaComponent } from 'src/app/secretaria/home/home-secretaria.component';
import { ModalsModule } from 'src/app/secretaria/modals/modals.module';
import { ValidarSolicitudComponent } from 'src/app/secretaria/validar-solicitud/validar-solicitud.component';

const routes: Routes = [
  { path: 'home', component: HomeSecretariaComponent },
  { path: 'validar-solicitud', component: ValidarSolicitudComponent },
  { path: 'agregar-carta', component: AgregarCartaPresentacionComponent },
  { path: 'gestionar-postulantes', component: GestionarPostulantesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ModalsModule
  ],
  exports: [RouterModule]
})
export class SecretariaLayoutRoutingModule { }
