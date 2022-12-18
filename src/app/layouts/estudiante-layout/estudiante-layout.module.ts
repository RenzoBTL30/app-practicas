import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudianteLayoutRoutingModule } from './estudiante-layout-routing.module';
import { EstudianteLayoutComponent } from './estudiante-layout.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { HomeEstudianteModule } from 'src/app/estudiante/home-estudiante/home-estudiante.module';
import { MenuSolicitudModule } from 'src/app/estudiante/menu-solicitud/menu-solicitud.module';
import { RegistrarSolicitudModule } from 'src/app/estudiante/registrar-solicitud/registrar-solicitud.module';
import { EstadoSolicitudModule } from 'src/app/estudiante/estado-solicitud/estado-solicitud.module';
import { ReporteEstudianteModule } from 'src/app/estudiante/reporte-estudiante/reporte-estudiante.module';

@NgModule({
  declarations: [EstudianteLayoutComponent],
  imports: [
    CommonModule,
    ElementosModule,
    HomeEstudianteModule,
    MenuSolicitudModule,
    RegistrarSolicitudModule,
    EstadoSolicitudModule,
    ReporteEstudianteModule,
    EstudianteLayoutRoutingModule,
  ],
  exports: [EstudianteLayoutComponent],
})
export class EstudianteLayoutModule {}
