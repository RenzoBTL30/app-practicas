import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import Urlbackend from '../models/constante';
import { postulante } from '../models/postulante';
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  urlgeneral: string = Urlbackend;
  constructor(private http: HttpClient) {}
  getSolicitud(id: number): Observable<postulante[]> {
    return this.http.get<postulante[]>(
      `${this.urlgeneral}postulante/${id}`,
      this.httpOptions
    );
  }
  getSupervisores(): Observable<usuario[]> {
    return this.http.get<usuario[]>(
      `${this.urlgeneral}usuario/supervisor`,
      this.httpOptions
    );
  }
  updateSupervisor(id:number): Observable<any[]> {
    return this.http.put<any[]>(
      `${this.urlgeneral}usuario/supervisor/${id}`,
      this.httpOptions
    );
  }
  getSupervisoresdni(dni:string): Observable<usuario[]> {
    return this.http.get<usuario[]>(
      `${this.urlgeneral}usuario/supervisor/${dni}`,
      this.httpOptions
    );
  }
  crearDocumento(
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
    inicio: Date,
    fin: Date,
    actividades: String,
    idtipoprac: number,
    idpostulante: number
  ) {
    return this.http.post<any>(`${this.urlgeneral}solicitud`, {
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
      fechainicio: inicio,
      fechafin: fin,
      actividades: actividades,
      tipoprac: idtipoprac,
      idpostulante: idpostulante,
    });
  }
}
