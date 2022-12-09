import { Component, OnInit } from '@angular/core';
import { tipodoc } from 'src/app/models/tipodoc';
import { usuario } from 'src/app/models/usuario';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { TipodocService } from 'src/app/services/tipodoc.service';
declare var $: any;
@Component({
  selector: 'app-gestionar-supervisores',
  templateUrl: './gestionar-supervisores.component.html',
  styleUrls: ['./gestionar-supervisores.component.scss'],
})
export class GestionarSupervisoresComponent implements OnInit {
  tipodocs?: tipodoc[];
  users?: usuario[];
  activo = true;
  documentobusqueda?: string;
  correo?: string;
  idsupervisor?: number;

  constructor(
    private tipo: TipodocService,
    private supervisor: EstudianteService
  ) {}

  ngOnInit(): void {
    this.tipo.gettipodocs().subscribe((data) => {
      this.tipodocs = data;
      this.listSupervisores();
    });
    $('#editarsupervisor').on('hide.bs.modal', (event: any) => {
      this.tipo.gettipodocs().subscribe((data) => {
        this.tipodocs = data;
        this.listSupervisores();
      });
    });
    $('#registrarSupervisor').on('hide.bs.modal', (event: any) => {
      this.tipo.gettipodocs().subscribe((data) => {
        this.tipodocs = data;
        this.listSupervisores();
      });
    });
  }
  listSupervisores() {
    this.supervisor.getSupervisores().subscribe((data) => {
      this.users = data;
      for (let i = 0; i < this.users.length; i++) {
        var numero = Number(this.users[i].estado_usuario);
        if (numero == 1) {
          this.users[i].estado = 1;
        } else {
          this.users[i].estado = 0;
        }
      }
    });
  }
  edit(correo: string, id: number) {
    this.correo = correo;
    this.idsupervisor = id;
    $('#editarsupervisor').modal('show');
  }

  cambio(valor: number, id: number) {
    var estados = '';
    if (valor == 1) {
      estados = '1';
    } else if (valor == 0) {
      estados = '0';
    }
    this.supervisor.updateestadoSupervisor(id, estados).subscribe((data) => {});
  }
  searchdni() {
    this.supervisor
      .getSupervisoresdni(this.documentobusqueda!)
      .subscribe((data) => {
        this.users = data;
        for (let i = 0; i < this.users.length; i++) {
          var numero = Number(this.users[i].estado_usuario);
          if (numero == 1) {
            this.users[i].estado = 1;
          } else {
            this.users[i].estado = 0;
          }
        }
      });
  }
}
