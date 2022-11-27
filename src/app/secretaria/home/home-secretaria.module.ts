import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSecretariaComponent } from './home-secretaria.component';
import { ElementosModule } from '../../elementos/elementos.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ModalsModule } from '../modals/modals.module';
import { CountUpModule } from 'ngx-countup';


@NgModule({
  declarations: [
    HomeSecretariaComponent
  ],
  imports: [
    CommonModule,
    ElementosModule,
    MatTooltipModule,
    ModalsModule,
    CountUpModule
  ],
  exports: [
    HomeSecretariaComponent
  ]
})
export class HomeSecretariaModule { }
