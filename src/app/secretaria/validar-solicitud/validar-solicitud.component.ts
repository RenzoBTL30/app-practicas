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

  solicitudesRegistradas:any[]=[];
  solicitudesAptas:any[]=[];
  solicitudesObservadas:any[]=[];

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
      this.solicitudesRegistradas = data;

      //Filtra las solicitudes que tengan observacion y las asigna a "solicitudesObservadas"
      this.solicitudesObservadas = this.solicitudesRegistradas.filter(x => x.observacion != '');

      //Filtra las solicitudes que no tengan observacion y las reeasigna a "solicitudesRegistradas"
      this.solicitudesRegistradas = this.solicitudesRegistradas.filter(x => x.observacion == '');
    })
  }
  

  // Funcion para listar nuevamente las solicitudes luego de recibir un evento del modal hijo (el evento es cuando se registra una observacion)
  listarSolicitudesRegistradasOtraVez($event:any){
    this.solicitudService.listSolicitudesPorEstado(1).subscribe(data => {
      this.solicitudesRegistradas = data;

      //Filtra las solicitudes que tengan observacion y las asigna a "solicitudesObservadas"
      this.solicitudesObservadas = this.solicitudesRegistradas.filter(x => x.observacion != '');

      //Filtra las solicitudes que no tengan observacion y las reeasigna a "solicitudesRegistradas"
      this.solicitudesRegistradas = this.solicitudesRegistradas.filter(x => x.observacion == '');
    })
  }


  // Funcion para listar solicitudes con estado = 2 (aptitud validada) (la solicitud validada)
  listarSolicitudesAptas(){
    this.solicitudService.listSolicitudesPorEstado(2).subscribe(data => {
      this.solicitudesAptas = data;
    })
  }
  
  seleccionarSoliReg(posicion:number){
    this.solicitudObject = this.solicitudesRegistradas[posicion];
  }

  seleccionarSoliObserv(posicion:number){
    this.solicitudObject = this.solicitudesObservadas[posicion];
  }

  seleccionarSoliApt(posicion:number){
    this.solicitudObject = this.solicitudesAptas[posicion];
  }
  
}
