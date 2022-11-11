import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariaLayoutRoutingModule } from './secretaria-layout.routing';
import { SecretariaLayoutComponent } from './secretaria-layout.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';


@NgModule({
  declarations: [
    SecretariaLayoutComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    SecretariaLayoutRoutingModule
  ],
  exports: [
    SecretariaLayoutComponent
  ]
})
export class SecretariaLayoutModule { }
