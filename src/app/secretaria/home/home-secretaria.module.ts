import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSecretariaComponent } from './home-secretaria.component';
import { ElementosModule } from '../../elementos/elementos.module';



@NgModule({
  declarations: [
    HomeSecretariaComponent
  ],
  imports: [
    CommonModule,
    ElementosModule
  ],
  exports: [
    HomeSecretariaComponent
  ]
})
export class HomeSecretariaModule { }
