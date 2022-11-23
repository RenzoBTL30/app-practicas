import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { SecretariaLayoutComponent } from './layouts/secretaria-layout/secretaria-layout.component';
import { EstudianteLayoutComponent } from './layouts/estudiante-layout/estudiante-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SupervisorLayoutComponent } from './layouts/supervisor-layout/supervisor-layout.component';
import { MatTooltipModule } from '@angular/material/tooltip';


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
    children: [{
      path: 'pages',
      loadChildren: () => import('./layouts/estudiante-layout/estudiante-layout.module').then(m => m.EstudianteLayoutModule)
    }]
  },

  {
    path: 'secretaria',
    component: SecretariaLayoutComponent,
    children: [{
      path: 'pages',
      loadChildren: () => import('./layouts/secretaria-layout/secretaria-layout.module').then(m => m.SecretariaLayoutModule)
    }]
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: 'pages',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },

  {
    path: 'supervisor',
    component: SupervisorLayoutComponent,
    children: [{
      path: 'pages',
      loadChildren: () => import('./layouts/supervisor-layout/supervisor-layout.module').then(m => m.SupervisorLayoutModule)
    }]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
