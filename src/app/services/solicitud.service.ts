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
  
  getSolicitudes(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.urlgeneral}solicitud/${id}`,
      this.httpOptions
    );
  }
  getSolicitudestipo(id: number,practica :number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.urlgeneral}solicitud/${id}/${practica}`,
      this.httpOptions
    );
  }

  //Listar solicitudes por solestado
  listSolicitudesPorEstado(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlgeneral}solicitud/estado/nuevo/${id}`);
  }

  //Listar solicitudes por id y solestado
  listSolicitudesPorEstadoyId(idsolicitud: number, idsolestado: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlgeneral}solicitud/estado/search/${idsolicitud}/${idsolestado}`);
  }

  getSolicitudesPorId(id: number): Observable<solicitud[]> {
    return this.http.get<solicitud[]>(`${this.urlgeneral}solicitud/search/${id}`);
  }

}
