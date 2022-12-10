import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
declare var $: any;

@Component({
  selector: 'app-validar-practicas',
  templateUrl: './validar-practicas.component.html',
  styleUrls: ['./validar-practicas.component.scss'],
})
export class ValidarPracticasComponent implements OnInit {
  reportes?: any[];
  soli?: any;
  constructor(private solicitudes: SolicitudService) {}

  ngOnInit(): void {
    this.solicitudes.listSolicitudesPorEstado(5).subscribe((data) => {
      this.reportes = data;
    });
    $('#validarHorasPracticas').on('hide.bs.modal', (event: any) => {
      this.solicitudes.listSolicitudesPorEstado(5).subscribe((data) => {
        this.reportes = data;
      });
    });
  }
  cargarSolicitud(position: number) {
    this.soli = this.reportes![position];
  }
}
