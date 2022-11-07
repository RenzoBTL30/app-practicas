import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPrincipalComponent } from './menu-principal.component';
import { ElementosModule } from 'src/app/elementos/elementos.module';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
  ],
  imports: [
    CommonModule,
    ElementosModule
  ],
  exports:[
    MenuPrincipalComponent
  ]
})
export class MenuPrincipalModule { }
