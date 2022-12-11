import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Urlbackend from '../models/constante';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  urlgeneral: string = Urlbackend;
  constructor(private http: HttpClient) {}

  getPostulantes(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.urlgeneral}postulante/listar/todos`,
      this.httpOptions
    );
  }

  insertPostulante(
    numdoc: String,
    nomusuario: String,
    correo: String,
    idtipodoc: number,
    codalumno: String,
    practicascomunitarias: String,
    practicasclinicas: String
  ) {
    //Las propiedades de la izquierda deben tener el mismo nombre de los parametros definidos en los controllers de NodeJS
    return this.http.post<any>(`${this.urlgeneral}postulante/registrar`, {
      num_doc: numdoc,
      nom_usuario: nomusuario,
      correo: correo,
      id_tipodoc: idtipodoc,
      cod_alumno: codalumno,
      h_comunitarias: practicascomunitarias,
      h_clinicas: practicasclinicas
    });
  }

  editPostulante(
    idpostu: number,
    idusuario: number,
    nomusuario: String,
    correo: String,
    practicascomunitarias: String,
    practicasclinicas: String
  ) {
    //Las propiedades de la izquierda deben tener el mismo nombre de los parametros definidos en los controllers de NodeJS
    return this.http.post<any>(`${this.urlgeneral}postulante/update/cambiar/${idpostu}/${idusuario}`, {
      nom_usuario: nomusuario,
      correo: correo,
      h_comunitarias: practicascomunitarias,
      h_clinicas: practicasclinicas
    });
  }

  // Actualiza el campo "estado_usuario"
  updateestadoPostulante(id:number, estado:string): Observable<any[]> {
    return this.http.put<any[]>(
      `${this.urlgeneral}postulante/update/estado/${id}`,{
        estado:estado
      },
        this.httpOptions
    );
  }

  getPostulantePorCodigoAlumno(codigo:string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.urlgeneral}postulante/search/${codigo}`,
      this.httpOptions
    );
  }
  
}
