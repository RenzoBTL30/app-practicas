import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
declare var $: any;
@Component({
  selector: 'app-validar-plaza',
  templateUrl: './validar-plaza.component.html',
  styleUrls: ['./validar-plaza.component.scss'],
})
export class ValidarPlazaComponent implements OnInit {
  validator?: number;
  reportes?: any[];
  reportesv?: any[];
  soli?: any;
  constructor(private solicitudes: SolicitudService) {}

  ngOnInit(): void {
    this.solicitudes.listSolicitudesPorEstado(2).subscribe((data) => {
      this.reportes = data;
    });

    $('#validarPlaza').on('hide.bs.modal', (event: any) => {
      this.solicitudes.listSolicitudesPorEstado(2).subscribe((data) => {
        this.reportes = data;
      });
    });
    $('#observacionesPlaza').on('hide.bs.modal', (event: any) => {
      this.solicitudes.listSolicitudesPorEstado(2).subscribe((data) => {
        this.reportes = data;
      });
    });
  }
  visualizar1() {
    this.solicitudes.listSolicitudesPorEstado(2).subscribe((data) => {
      this.reportes = data;
    });
  }
  visualizar2() {
    this.solicitudes.listSolicitudesPorEstado(3).subscribe((data) => {
      this.reportesv = data;
    });
  }
  // ---- Tipos de visualizacion: ----
  // Si es 1 es para validar plaza
  // Si es 2 es solo para ver

  TipoVisualizacion(validator: number, position: number) {
    this.validator = validator;
    this.soli = this.reportes![position];
  }
  TipoVisualizacion1(validator: number, position: number) {
    this.validator = validator;
    this.soli = this.reportesv![position];
  }
}
