import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupervisorLayoutRoutingModule } from './supervisor-layout-routing.module';
import { SupervisorLayoutComponent } from './supervisor-layout.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';


@NgModule({
  declarations: [
    SupervisorLayoutComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    SupervisorLayoutRoutingModule
  ],
  exports: [
    SupervisorLayoutComponent
  ]
})
export class SupervisorLayoutModule { }
