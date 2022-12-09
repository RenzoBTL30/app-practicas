import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url: string = 'http://localhost:3000/api/auth/solicitud'

  constructor(private http: HttpClient) { }

  //Listar solicitudes por solestado
  listSolicitudesPorEstado(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/estado/nuevo/${id}`);
  }

  //Listar solicitudes por id y solestado
  listSolicitudesPorEstadoyId(idsolicitud: number, idsolestado: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/estado/search/${idsolicitud}/${idsolestado}`);
  }

  getSolicitudesPorId(id: number): Observable<solicitud[]> {
    return this.http.get<solicitud[]>(`${this.url}/search/${id}`);
  }

}
