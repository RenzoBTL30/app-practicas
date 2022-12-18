import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
import { postulante } from 'src/app/models/postulante';
import { EstudianteService } from 'src/app/services/estudiante.service';
@Component({
  selector: 'app-reporte-estudiante',
  templateUrl: './reporte-estudiante.component.html',
  styleUrls: ['./reporte-estudiante.component.scss'],
})
export class ReporteEstudianteComponent implements OnInit {
  postu?: postulante;
  @ViewChild('clicSubir') clicSubir: any;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [
    'Practicas Clinicas',
    'Practicas Comunitarias',
    'Horas Faltantes',
  ];
  pieChartData: ChartDataSets[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private postulante: EstudianteService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  changeData(numero1: number, numero2: number) {
    var numero3 = 400 - numero1 - numero2;
    const dataSets = [numero1, numero2, numero3];
    const low = 2;
    const high = 5;
    const colors = ['#3B8DC3', '#F0505A', '#EFC454'];

    const barChartData: ChartDataSets[] = [
      {
        data: dataSets,
        label: 'A Bar Chart',
        backgroundColor: colors,
      },
    ];
    return barChartData;
  }

  ngOnInit(): void {
    var idpostulante = parseInt(sessionStorage.getItem('id')!);
    this.postulante.getSolicitud(idpostulante).subscribe((data) => {
      this.postu = data[0];
      this.pieChartData = this.changeData(
        this.postu.horas_clinicas!,
        this.postu.horas_comunitarias!
      );
    });
  }
}
