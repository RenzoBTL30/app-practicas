import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Urlbackend from '../models/constante';

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
}
