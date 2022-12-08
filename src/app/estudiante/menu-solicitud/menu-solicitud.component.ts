import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { postulante } from 'src/app/models/postulante';
import { EstudianteService } from 'src/app/services/estudiante.service';
declare var $: any;
@Component({
  selector: 'app-menu-solicitud',
  templateUrl: './menu-solicitud.component.html',
  styleUrls: ['./menu-solicitud.component.scss'],
})
export class MenuSolicitudComponent implements OnInit {
  postu?: postulante;
  vcomunitarias?: number;
  vclinicas?: number;
  count = 0;
  check = false;
  constructor(private postulante: EstudianteService, private router: Router) {}

  ngOnInit(): void {
    var idpostulante = parseInt(sessionStorage.getItem('id')!);
    this.postulante.getSolicitud(idpostulante).subscribe((data) => {
      this.postu = data[0];
      this.vcomunitarias = parseInt(this.postu.h_comunitarias!);
      this.vclinicas = parseInt(this.postu.h_clinicas!);
      console.log(this.postu);
    });
  }
  navegar() {
    if (this.postu?.sol_activas == '0') {
      this.router.navigate(['/estudiante/pages/registrar-solicitud'], {
        queryParams: {
          comunitarias: this.vcomunitarias,
          clinicas: this.vclinicas,
        },
      });
    } else {
      this.showNotification('top', 'right', 'nombre');
    }
  }
  showNotification(from: any, align: any, nombreArchivo: any) {
    $.notify(
      {
        icon: 'face',
        title: 'Alerta:',
        message: `No puede agregar solicitudes, tiene una activa en estos momentos`,
      },

      {
        type: 'warning',
        timer: 5000,
        delay: 5000,
        placement: {
          from: from,
          align: align,
        },
      }
    );
  }
}
