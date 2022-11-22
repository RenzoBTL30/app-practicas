import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarSupervisoresComponent } from 'src/app/admin/gestionar-supervisores/gestionar-supervisores.component';
import { HomeAdminComponent } from 'src/app/admin/home-admin/home-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeAdminComponent },
  { path: 'gestionar-supervisores', component: GestionarSupervisoresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
