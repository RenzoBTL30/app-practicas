import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getPostulante(){

  }

  getPostulantePorCodigo(){

  }


  insertPostulante(){

  }

  editPostulante(){

  }

  deletePostulante(){

  }
}
