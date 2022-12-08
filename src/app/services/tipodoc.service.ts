import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Urlbackend from '../models/constante';
import { tipodoc } from '../models/tipodoc';

@Injectable({
  providedIn: 'root'
})
export class TipodocService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  urlgeneral: string = Urlbackend;
  constructor(private http: HttpClient) {}
 
  gettipodocs(): Observable<tipodoc[]> {
    return this.http.get<tipodoc[]>(
      `${this.urlgeneral}tipodoc`,
      this.httpOptions
    );
  }
}
