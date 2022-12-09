import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Urlbackend from '../models/constante';

@Injectable({
  providedIn: 'root'
})
export class SolicitudDocumentosService {

  constructor(private http: HttpClient ) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  urlgeneral: string = Urlbackend;
  insertDocumentosFinales(
    linkinforme: String,
    constanciahoras: String,
    
    idsolicitud: number,
 
  ) {
    return this.http.post<any>(`${this.urlgeneral}solicituddocumentos/documentosfinales`, {
      
      linkinforme:linkinforme,
      constanciahoras:constanciahoras,
      idsolicitud:idsolicitud
      
    });
  }
  updateDoucmentos(
    linkinforme: String,
    constanciahoras: String,
    
    idsolicitud: number,
 
  ) {
    return this.http.put<any>(`${this.urlgeneral}solicituddocumentos/documentosfinales`, {
      
      linkinforme:linkinforme,
      constanciahoras:constanciahoras,
      idsolicitud:idsolicitud
      
    });
  }
}
