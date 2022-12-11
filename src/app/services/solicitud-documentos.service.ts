import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Urlbackend from '../models/constante';

@Injectable({
  providedIn: 'root',
})
export class SolicitudDocumentosService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  urlgeneral: string = Urlbackend;
  insertDocumentosFinales(
    linkinforme: String,
    constanciahoras: String,

    idsolicitud: number
  ) {
    return this.http.post<any>(
      `${this.urlgeneral}solicituddocumentos/documentosfinales`,
      {
        linkinforme: linkinforme,
        constanciahoras: constanciahoras,
        idsolicitud: idsolicitud,
      }
    );
  }
  cartadepresentacion(
    link_carta: String,
    link_guia: String,

    id: number
  ) {
    return this.http.post<any>(`${this.urlgeneral}solicitud/agregarcarta`, {
      link_carta: link_carta,
      link_guia: link_guia,
      id: id,
    });
  }
  insertDocumentosFinal(
    idsolicitud: number,
    idpostulante: number,
    guia: string,
    horas: number,
    practica: number
  ) {
    return this.http.post<any>(
      `${this.urlgeneral}solicituddocumentos/documentofinal`,
      {
        idsolicitud: idsolicitud,
        idpostulante: idpostulante,
        guia: guia,
        horas: horas,
        practica: practica,
      }
    );
  }
  updateDoucmentos(
    linkinforme: String,
    constanciahoras: String,

    idsolicitud: number
  ) {
    return this.http.put<any>(
      `${this.urlgeneral}solicituddocumentos/documentosfinales`,
      {
        linkinforme: linkinforme,
        constanciahoras: constanciahoras,
        idsolicitud: idsolicitud,
      }
    );
  }
}
