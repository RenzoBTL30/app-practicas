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


  login(){
    if (this.usuario == "lucho" && this.contra == "12345") {
        this.router.navigate(['/menu-principal']);
    } else if (this.usuario == "secretaria" && this.contra == "secre123") {
        this.router.navigate(['/pages/home']);
    } else if (this.usuario == "alvaro" && this.contra == "alvaro123") {
    }
  }

}
