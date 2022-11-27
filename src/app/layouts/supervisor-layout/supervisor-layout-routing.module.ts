import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarPlazaComponent } from 'src/app/supervisor/validar-plaza/validar-plaza.component';
import { ValidarPracticasComponent } from 'src/app/supervisor/validar-practicas/validar-practicas.component';

const routes: Routes = [
  { path: 'validar-plaza', component: ValidarPlazaComponent },
  { path: 'validar-practicas', component: ValidarPracticasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorLayoutRoutingModule { }
