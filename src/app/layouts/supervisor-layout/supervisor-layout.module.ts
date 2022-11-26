import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorLayoutRoutingModule } from './supervisor-layout-routing.module';
import { SupervisorLayoutComponent } from './supervisor-layout.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ValidarPlazaModule } from 'src/app/supervisor/validar-plaza/validar-plaza.module';
import { ValidarPracticasModule } from 'src/app/supervisor/validar-practicas/validar-practicas.module';


@NgModule({
  declarations: [
    SupervisorLayoutComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    MatTooltipModule,
    ValidarPlazaModule,
    ValidarPracticasModule,
    SupervisorLayoutRoutingModule
  ],
  exports: [
    SupervisorLayoutComponent
  ]
})
export class SupervisorLayoutModule { }
