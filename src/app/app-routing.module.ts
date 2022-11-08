import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { RegistrarSolicitudComponent } from './registrar-solicitud/registrar-solicitud.component';

const routes: Routes = [
  { path: '', component: LoginComponent },


  { path: 'registrar-solicitud', component: RegistrarSolicitudComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
