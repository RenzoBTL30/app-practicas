import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEstudianteComponent } from 'src/app/estudiante/home-estudiante/home-estudiante.component';
import { RegistrarSolicitudComponent } from 'src/app/estudiante/registrar-solicitud/registrar-solicitud.component';
import { DetalleSolicitudComponent } from 'src/app/estudiante/revisar-solicitudes/detalle-solicitud/detalle-solicitud.component';
import { RevisarSolicitudesComponent } from 'src/app/estudiante/revisar-solicitudes/revisar-solicitudes.component';

const routes: Routes = [
  { path: 'home', component: HomeEstudianteComponent },
  { path: 'registrar-solicitud', component: RegistrarSolicitudComponent },
  { path: 'revisar-solicitud', component: RevisarSolicitudesComponent },
  { path: 'detalle-solicitud', component: DetalleSolicitudComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteLayoutRoutingModule { }
