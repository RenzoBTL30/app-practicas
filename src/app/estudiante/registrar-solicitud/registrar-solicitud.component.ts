import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from 'express';
import { LoginsService } from 'src/app/login/logins.service';
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
  fechainicio?: Date = new Date();
  fechafin?: Date = new Date();
  lista: string[] = [
    '--- Seleccione el tipo de prácticas ---',
    'Prácticas Clínicas',
    'Prácticas Comunitarias',
  ];
  @ViewChild('clicSubir') clicSubir: any;

  constructor(private user: EstudianteService) {}

  ngOnInit(): void {
    this.seleccionado = 0;
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
  registrarsolicitud() {}
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
}
