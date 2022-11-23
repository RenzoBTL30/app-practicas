import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretariaLayoutRoutingModule } from './secretaria-layout.routing';
import { SecretariaLayoutComponent } from './secretaria-layout.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SecretariaLayoutComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    SecretariaLayoutRoutingModule,
    FormsModule,
    MatTooltipModule
  ],
  exports: [
    SecretariaLayoutComponent
  ]
})
export class SecretariaLayoutModule { }
