import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-validar-solicitud',
  templateUrl: './validar-solicitud.component.html',
  styleUrls: ['./validar-solicitud.component.scss']
})
export class ValidarSolicitudComponent implements OnInit {

  validator?:number;
  solicitud:any[]=[];
  soliEnviar?:any;
  idSolicitud?:number;

  solicitudObject:any;


  constructor(private solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.listarSolicitudesRegistradas();
  }

  // ---- Tipos de visualizacion: ----
  // Si es 1 es para hacer las observaciones y validar
  // Si es 2 es para ver las observaciones y validar
  // Si es 3 es solo para ver

  TipoVisualizacion(validator:number){
    this.validator = validator;
  }

  // Funcion para listar solicitudes con estado = 1 (registrado)
  listarSolicitudesRegistradas(){
    this.solicitudService.listSolicitudesPorEstado(1).subscribe(data => {
      this.solicitud = data;
    })
  }

  listarSolicitudesPorEstadoyId(idsolicitud:number, idsolestado:number){
    this.solicitudService.listSolicitudesPorEstadoyId(idsolicitud,idsolestado).subscribe(data => {
      this.solicitud = data;
    })
  }
  
  seleccionarSoli(posicion:number){
    this.solicitudObject = this.solicitud[posicion];
  }
  
}
