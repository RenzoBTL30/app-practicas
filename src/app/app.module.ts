import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalsModule } from './secretaria/modals/modals.module';
import { CountUpModule } from 'ngx-countup';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CountUpModule,
    MatFormFieldModule,
    MatTableModule,
    ModalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
