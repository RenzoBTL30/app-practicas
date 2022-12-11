import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';
import { LoginsService } from 'src/app/login/logins.service';
import { postulante } from 'src/app/models/postulante';
import { EstudianteService } from 'src/app/services/estudiante.service';
declare var $: any;

@Component({
  selector: 'app-registrar-solicitud',
  templateUrl: './registrar-solicitud.component.html',
  styleUrls: ['./registrar-solicitud.component.scss'],
})
export class RegistrarSolicitudComponent implements OnInit {
  centro?: string;
  departamento?: string;
  provincia?: string;
  distrito?: string;
  direccion?: string;
  nombresupervisor?: string;
  correosupervisor?: string;
  telefonosupervisor?: string;
  nombredirector?: string;
  cargodirector?: string;
  correodirector?: string;
  descripcion?: string;
  seleccionado?: number;
  idpostulante?: number;
  fechainicio?: Date = new Date();
  fechafin?: Date = new Date();
  lista: Array<any> = [{ value: 0, label: '------Seleccione una Opcion-----' }];
  clinicas?: number;
  comunitarias?: number;
  @ViewChild('clicSubir') clicSubir: any;

  constructor(
    private user: EstudianteService,
    private route: ActivatedRoute,
    private rout: Router
  ) {}

  ngOnInit(): void {
    this.seleccionado = 0;

    this.idpostulante = parseInt(sessionStorage.getItem('id')!);
    this.route.queryParams.subscribe((params) => {
      this.clinicas = params['clinicas'];
      this.comunitarias = params['comunitarias'];
      console.log(this.clinicas);
      console.log(this.comunitarias);
      if (this.clinicas == 1) {
        this.lista.push({ value: 1, label: 'Practicas Clínicas' });
      }
      if (this.comunitarias == 1) {
        this.lista.push({ value: 2, label: 'Practicas Comunitarias' });
      }
    });
  }

  eventoClicSubir() {
    this.clicSubir.nativeElement.click();
  }

  mostrarNombreArchivo() {
    var archivoSeleccionado, nombre;
    archivoSeleccionado = $('#file-upload-descripcion').val();
    nombre = archivoSeleccionado.replace(/.*[\/\\]/, '');
    this.showNotification('top', 'right', nombre);
  }
  registrarsolicitud() {
    if (
      this.centro == null ||
      this.departamento == null ||
      this.provincia == null ||
      this.distrito == null ||
      this.direccion == null ||
      this.nombresupervisor == null ||
      this.correosupervisor == null ||
      this.telefonosupervisor == null ||
      this.nombredirector == null ||
      this.cargodirector == null ||
      this.correodirector == null ||
      this.descripcion == null ||
      this.seleccionado == 0 ||
      this.fechainicio == null ||
      this.fechafin == null
    ) {
      this.showNotificationalert('top', 'right', 'asasasa');
    } else {
      this.user
        .crearDocumento(
          this.centro!,
          this.direccion!,
          this.departamento!,
          this.provincia!,
          this.distrito!,
          this.nombresupervisor!,
          this.correosupervisor!,
          this.telefonosupervisor!,
          this.nombredirector!,
          this.cargodirector!,
          this.correodirector!,
          this.fechainicio!,
          this.fechafin!,
          this.descripcion!,
          this.seleccionado!,
          this.idpostulante!
        )
        .subscribe((data) => {
          this.rout.navigate(['/estudiante/pages/mis-solicitudes']);
        });
    }
  }
  showNotification(from: any, align: any, nombreArchivo: any) {
    $.notify(
      {
        icon: 'face',
        title: 'Archivo:',
        message: `<strong>${nombreArchivo}</strong> seleccionado`,
      },

      {
        type: 'success',
        timer: 2500,
        delay: 2500,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  }
  showNotificationalert(from: any, align: any, nombreArchivo: any) {
    $.notify(
      {
        icon: 'face',
        title: 'Error:',
        message: `Seleccione todos los campos`,
      },

      {
        type: 'warning',
        timer: 2500,
        delay: 2500,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  }
}
