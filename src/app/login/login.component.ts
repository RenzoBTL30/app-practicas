import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // ---- temporal ----
  usuario?:string;
  contra?:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // <---- temporal ---->
  // -- Credenciales:
  // 1. Rol: Estudiante
  //    Usuario: lucho
  //    Contra: 12345

  // 2. Rol: Secretaria
  //    Usuario: secretaria
  //    Contra: secre123

  // 3. Rol: Supervisor
  //    Usuario: alvaro
  //    Contra: alvaro123

  // 4. Rol: Admin
  //    Usuario: davicho
  //    Contra: 12345



  login(){

    localStorage.setItem('usuario',this.usuario!);

    if (this.usuario == "lucho" && this.contra == "12345") {
        localStorage.setItem('rol','estudiante');
        this.router.navigate(['/estudiante/pages/home']);

    } else if (this.usuario == "secretaria" && this.contra == "secre123") {
        localStorage.setItem('rol','secretaria');
        this.router.navigate(['/secretaria/pages/home']);

    } else if (this.usuario == "alvaro" && this.contra == "alvaro123") {
        localStorage.setItem('rol','supervisor');
        this.router.navigate(['/supervisor/pages/validar-plaza']);

    } else if (this.usuario == "renzo" && this.contra == "12345") {
        localStorage.setItem('rol','admin');
        this.router.navigate(['/admin/pages/home']);
    }
  }
}
