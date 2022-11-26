import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEstudianteComponent } from 'src/app/estudiante/home-estudiante/home-estudiante.component';
import { MenuSolicitudComponent } from 'src/app/estudiante/menu-solicitud/menu-solicitud.component';

const routes: Routes = [
  { path: 'home', component: HomeEstudianteComponent },
  { path: 'mis-solicitudes', component: MenuSolicitudComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteLayoutRoutingModule { }
