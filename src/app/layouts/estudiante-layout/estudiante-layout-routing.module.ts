import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoSolicitudComponent } from 'src/app/estudiante/estado-solicitud/estado-solicitud.component';
import { HomeEstudianteComponent } from 'src/app/estudiante/home-estudiante/home-estudiante.component';
import { MenuSolicitudComponent } from 'src/app/estudiante/menu-solicitud/menu-solicitud.component';
import { RegistrarSolicitudComponent } from 'src/app/estudiante/registrar-solicitud/registrar-solicitud.component';
import { ReporteEstudianteComponent } from 'src/app/estudiante/reporte-estudiante/reporte-estudiante.component';

const routes: Routes = [
  { path: 'home', component: HomeEstudianteComponent },
  { path: 'mis-solicitudes', component: MenuSolicitudComponent },
  { path: 'registrar-solicitud', component: RegistrarSolicitudComponent },
  { path: 'estado-solicitud', component: EstadoSolicitudComponent },
  { path: 'reporte-estudiante', component: ReporteEstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudianteLayoutRoutingModule {}
