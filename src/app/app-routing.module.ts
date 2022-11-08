import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './estudiante/menu-principal/menu-principal.component';
import { MenuPrincipalModule } from './estudiante/menu-principal/menu-principal.module';
import { RegistrarSolicitudComponent } from './estudiante/registrar-solicitud/registrar-solicitud.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registrar-solicitud', component: RegistrarSolicitudComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    MenuPrincipalModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
