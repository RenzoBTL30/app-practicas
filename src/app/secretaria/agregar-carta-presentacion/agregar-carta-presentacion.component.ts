import { Component, OnInit } from '@angular/core';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { SolicitudService } from 'src/app/services/solicitud.service';
declare var $: any;

@Component({
  selector: 'app-agregar-carta-presentacion',
  templateUrl: './agregar-carta-presentacion.component.html',
  styleUrls: ['./agregar-carta-presentacion.component.scss'],
})
export class AgregarCartaPresentacionComponent implements OnInit {
  validator?: number;
  reportes?: any[];
  reportes2?: any[];
  soli?: any;

  constructor(private solicitudes: SolicitudService, public storage: Storage) {}

  ngOnInit(): void {
    this.solicitudes.listSolicitudesPorEstado(3).subscribe((data) => {
      this.reportes = data;
    });
    this.solicitudes.listSolicitudesPorEstado(4).subscribe((data) => {
      this.reportes2 = data;
    });
    $('#agregarCartaPresentacion').on('hide.bs.modal', (event: any) => {
      this.solicitudes.listSolicitudesPorEstado(3).subscribe((data) => {
        this.reportes = data;
      });
      this.solicitudes.listSolicitudesPorEstado(4).subscribe((data) => {
        this.reportes2 = data;
      });
    });
  }

  solicitud(position: number) {
    this.soli = this.reportes![position];
  }

  solicitud1(position: number) {
    this.soli = this.reportes2![position];
  }
  // ---- Tipos de visualizacion: ----
  // Si es 1 es para subir los archivos
  // Si es 2 es solo para ver

  TipoVisualizacion(validator: number) {
    this.validator = validator;
  }
}
