import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteEstudianteComponent } from './reporte-estudiante.component';
import { ChartsModule } from 'ng2-charts';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
  ],
  declarations: [ReporteEstudianteComponent],
})
export class ReporteEstudianteModule {}
