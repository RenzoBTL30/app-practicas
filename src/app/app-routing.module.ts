import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { SecretariaLayoutComponent } from './layouts/secretaria-layout/secretaria-layout.component';
import { EstudianteLayoutComponent } from './layouts/estudiante-layout/estudiante-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SupervisorLayoutComponent } from './layouts/supervisor-layout/supervisor-layout.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ModalsModule } from './secretaria/modals/modals.module';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },

  /* ---- Antiguas rutas de la vista Estudiante ----
  { path: 'registrar-solicitud', component: RegistrarSolicitudComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'revisar-solicitud', component: RevisarSolicitudesComponent },
  { path: 'detalle-solicitud', component: DetalleSolicitudComponent },
  { path: 'validar-solicitud', component: ValidarSolicitudComponent },
  */

  {
    path: 'estudiante',
    component: EstudianteLayoutComponent,
    canActivate: [VigilanteGuard],
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('./layouts/estudiante-layout/estudiante-layout.module').then(
            (m) => m.EstudianteLayoutModule
          ),
      },
    ],
  },

  {
    path: 'secretaria',
    component: SecretariaLayoutComponent,
    canActivate: [VigilanteGuard],
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('./layouts/secretaria-layout/secretaria-layout.module').then(
            (m) => m.SecretariaLayoutModule
          ),
      },
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [VigilanteGuard],
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('./layouts/admin-layout/admin-layout.module').then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },

  {
    path: 'supervisor',
    component: SupervisorLayoutComponent,
    canActivate: [VigilanteGuard],
    children: [
      {
        path: 'pages',
        loadChildren: () =>
          import('./layouts/supervisor-layout/supervisor-layout.module').then(
            (m) => m.SupervisorLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, ModalsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
