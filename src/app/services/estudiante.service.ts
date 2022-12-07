import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';

import { Urlbackend } from '../models/constante';
@Injectable({
  providedIn: 'root',
})
export class EstudianteService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  crearDocumento(link: String, solicitud: number, tipo: number) {
    console.log(Urlbackend);
  }
}
