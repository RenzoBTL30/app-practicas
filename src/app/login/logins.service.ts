import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Usuario } from 'src/app/login/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginsService {
  token = sessionStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };
  private urlusuario: string =
    'https://app-chosica-back-2022.herokuapp.com/api/auth/usuario/validar';

  constructor(private http: HttpClient, private router: Router) {}
  validarUsuario(user: String, pass: String): Observable<Usuario[]> {
    console.log({ usuario: user, password: pass });
    return this.http.post<Usuario[]>(this.urlusuario, {
      usuario: user,
      password: pass,
    });
  }

  get isLogged() {
    return (
      sessionStorage.getItem('TOKEN') && sessionStorage.getItem('EXPIRE_IN')
    );
  }

  guardarUsuario(accessToken: string): void {
    let payload = this.obtenerDatosToken(accessToken);
    console.log(payload);
    sessionStorage.setItem('id', payload.user.id);
    sessionStorage.setItem('rol', payload.user.idrol);
    sessionStorage.setItem('nombre', payload.user.nombrecompleto);
  }
  guardarToken(accessToken: string): void {
    sessionStorage.setItem('token', accessToken);
  }

  eliminarToken() {
    sessionStorage.clear();
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      if (accessToken.length > 0) {
        return JSON.parse(atob(accessToken.split('.')[1]));
      }
    }
    return null;
  }

  login(user: String, pass: String): Observable<any> {
    const urlEndpoint = 'http://localhost:3000/api/auth/';

    return this.http.post<any>(urlEndpoint, { username: user, password: pass });
  }
}
