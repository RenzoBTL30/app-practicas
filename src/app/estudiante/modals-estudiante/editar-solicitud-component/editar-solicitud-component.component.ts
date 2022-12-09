import { Component, Input, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
declare var $: any;
@Component({
  selector: 'app-editar-solicitud-component',
  templateUrl: './editar-solicitud-component.component.html',
  styleUrls: ['./editar-solicitud-component.component.scss'],
})
export class EditarSolicitudComponentComponent implements OnInit {
  @Input() nombrecentro?: string;
  @Input() departamento?: string;
  @Input() provincia?: string;
  @Input() distrito?: string;
  @Input() direccion?: string;
  @Input() nomsupervisor?: string;
  @Input() correosupervisor?: string;
  @Input() telefonosupervisor?: string;
  @Input() nomdirector?: string;
  @Input() cargodirector?: string;
  @Input() correodirector?: string;
  @Input() idsolicitud?: number;

  constructor(private solicitud: SolicitudService) {}

  ngOnInit() {}

  updateSolicitud() {
    this.solicitud
      .updatesolicitud(
        this.nombrecentro!,
        this.departamento!,
        this.provincia!,
        this.distrito!,
        this.direccion!,
        this.nomsupervisor!,
        this.correosupervisor!,
        this.telefonosupervisor!,
        this.nomdirector!,
        this.cargodirector!,
        this.correodirector!,
        this.idsolicitud!
      )
      .subscribe((data) => {
        console.log(this.idsolicitud);
        $('#editarsolicitud').modal('hide');
      });
  }
}
