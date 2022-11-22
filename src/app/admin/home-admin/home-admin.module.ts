import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin.component';



@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeAdminComponent
  ]
})
export class HomeAdminModule { }
