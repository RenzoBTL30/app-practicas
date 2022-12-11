import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Urlbackend from '../models/constante';
import { solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  urlgeneral: string = Urlbackend;

  constructor(private http: HttpClient) {}
  updatesolicitud(
    namcentro: String,
    direccion: String,
    departamento: String,
    provincia: String,
    distrito: String,
    supnombre: String,
    correosuper: String,
    telefonosupervisor: String,
    nombredirector: String,
    cargodirector: String,
    correodirector: String,
    idsolicitud: number
  ) {
    return this.http.put<any>(`${this.urlgeneral}solicitud/${idsolicitud}`, {
      centro: namcentro,
      direccion: direccion,
      departamento: departamento,
      provincia: provincia,
      distrito: distrito,
      supnombre: supnombre,
      supcorreo: correosuper,
      suptelefono: telefonosupervisor,
      remnombre: nombredirector,
      remcargo: cargodirector,
      remcorreo: correodirector,
    });
  }
  obserbacionSolicitud(
    obserbacion: String,

    idsolicitud: number
  ) {
    return this.http.post<any>(
      `${this.urlgeneral}solicitud/observarsolicitud/${idsolicitud}`,
      {
        observacion: obserbacion,
      }
    );
  }
  validarSolicitud(
    id: number,

    estado: number
  ) {
    return this.http.post<any>(`${this.urlgeneral}solicitud/validarsolicitud`, {
      id: id,
      ESTADO: estado,
    });
  }
  getSolicitudes(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.urlgeneral}solicitud/${id}`,
      this.httpOptions
    );
  }
  getSolicitudestipo(id: number, practica: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.urlgeneral}solicitud/${id}/${practica}`,
      this.httpOptions
    );
  }

  //Listar solicitudes por solestado
  listSolicitudesPorEstado(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.urlgeneral}solicitud/estado/nuevo/${id}`
    );
  }
  deletesolicitud(id: number, idpostulante: number): Observable<any[]> {
    return this.http.delete<any[]>(
      `${this.urlgeneral}solicitud/delete/${id}/${idpostulante}`
    );
  }
  //Listar solicitudes por id y solestado
  listSolicitudesPorEstadoyId(
    idsolicitud: number,
    idsolestado: number
  ): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.urlgeneral}solicitud/estado/search/${idsolicitud}/${idsolestado}`
    );
  }

  getSolicitudesPorId(id: number): Observable<solicitud[]> {
    return this.http.get<solicitud[]>(
      `${this.urlgeneral}solicitud/search/${id}`
    );
  }

  // Agrega la observación (como parametro en la linea 78 y preparada para ser enviada en la linea 80)
  // a la solicitud que coincida su id con el parametro de la linea 78
  observarSolicitud(id:number, observacion:string): Observable<any[]> {
    return this.http.post<any[]>(
      `${this.urlgeneral}solicitud/observarsolicitud/${id}`,{
        observacion:observacion
      },
      this.httpOptions
    );
  }

  rechazarSolicitud(){

  }

  

}
