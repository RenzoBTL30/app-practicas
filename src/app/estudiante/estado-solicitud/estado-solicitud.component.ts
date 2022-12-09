import { Component, OnInit } from '@angular/core';
import { solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-estado-solicitud',
  templateUrl: './estado-solicitud.component.html',
  styleUrls: ['./estado-solicitud.component.scss'],
})
export class EstadoSolicitudComponent implements OnInit {
  soli?: any;
  reportes: any[] = [];
  seleccionado?: number;
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
  }
  onchagedvalue() {
    this.solicitud.getSolicitudestipo(this.idpostulante,this.seleccionado!).subscribe((data) => {
      this.reportes = data;
      
    });
  }
  selecionsoli(position:number){
    this.soli=this.reportes[position];
  }
}
