import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
declare var $: any;
@Component({
  selector: 'app-estado-solicitud',
  templateUrl: './estado-solicitud.component.html',
  styleUrls: ['./estado-solicitud.component.scss'],
})
export class EstadoSolicitudComponent implements OnInit {
  soli?: any;
  reportes: any[] = [];
  seleccionado?: number;
  accion?: number;
  accionnombre = '';
  nombrecentro = '';
  departamento = '';
  provincia = '';
  distrito = '';
  direccion = '';
  nomsupervisor = '';
  correosupervisor = '';
  telefonosupervisor = '';
  nomdirector = '';
  cargodirector = '';
  correodirector = '';
  lista: Array<any> = [
    { value: 0, label: 'Seleccione una Opcion' },
    { value: 1, label: 'Practicas Clínicas' },
    { value: 2, label: 'Practicas Comunitarias' },
  ];
  idpostulante = parseInt(sessionStorage.getItem('id')!);
  constructor(private solicitud: SolicitudService) {}

  ngOnInit(): void {
    this.seleccionado = 0;

    this.solicitud.getSolicitudes(this.idpostulante).subscribe((data) => {
      this.reportes = data;
    });
    $('#subirDocPracticas').on('hide.bs.modal', (event: any) => {
      this.solicitud.getSolicitudes(this.idpostulante).subscribe((data) => {
        this.reportes = data;
        console.log(this.reportes);
      });
    });
    $('#editarsolicitud').on('hide.bs.modal', (event: any) => {
      this.solicitud.getSolicitudes(this.idpostulante).subscribe((data) => {
        this.reportes = data;
        console.log(this.reportes);
      });
    });
  }
  onchagedvalue() {
    if (this.seleccionado == 0) {
      this.solicitud.getSolicitudes(this.idpostulante).subscribe((data) => {
        this.reportes = data;
        console.log(this.reportes);
      });
    } else {
      this.solicitud
        .getSolicitudestipo(this.idpostulante, this.seleccionado!)
        .subscribe((data) => {
          this.reportes = data;
        });
    }
  }
  selecionsoli(position: number, accion: number, nombre: string) {
    this.accion = accion;
    this.accionnombre = nombre;
    this.soli = this.reportes[position];
  }
  edicionsoli(position: number, accion: number, nombre: string) {
    this.accion = accion;
    this.accionnombre = nombre;
    this.soli = this.reportes[position];
    this.nombrecentro = this.soli.centro_practicas;
    this.departamento = this.soli.departamento;
    this.provincia = this.soli.provincia;
    this.distrito = this.soli.distrito;
    this.direccion = this.soli.direccion;
    this.nomsupervisor = this.soli.sup_nombre;
    this.correosupervisor = this.soli.sup_correo;
    this.telefonosupervisor = this.soli.sup_telefono;
    this.nomdirector = this.soli.rem_nombre;
    this.cargodirector = this.soli.rem_cargo;
    this.correodirector = this.soli.rem_correo;
    $('#editarsolicitud').modal('show');
  }
}
