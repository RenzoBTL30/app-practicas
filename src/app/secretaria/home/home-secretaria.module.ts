import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSecretariaComponent } from './home-secretaria.component';
import { ElementosModule } from '../../elementos/elementos.module';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    HomeSecretariaComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    MatTooltipModule,
  ],
  exports: [
    HomeSecretariaComponent
  ]
})
export class HomeSecretariaModule { }
