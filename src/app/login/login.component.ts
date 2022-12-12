import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginsService } from './logins.service';
import swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // ---- temporal ----
  usuario?: string;
  contra?: string;
  reportes: any = [];
  constructor(
    private router: Router,
    private user: LoginsService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    sessionStorage.clear();
    this.cookieService.deleteAll();
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

  ingresar(): void {
    this.user.login(this.usuario!, this.contra!).subscribe(
      (data: any) => {
        this.reportes = data;
        console.log(this.reportes);

        this.user.guardarUsuario(data.accessToken);
        this.user.guardarToken(data.accessToken);
        var rol = parseInt(sessionStorage.getItem('rol')!);
        if (rol == 1) {
          localStorage.setItem('rol', 'estudiante');
          this.router.navigate(['/estudiante/pages/home']);
        } else if (rol == 3) {
          localStorage.setItem('rol', 'secretaria');
          this.router.navigate(['/secretaria/pages/home']);
        } else if (rol == 2) {
          localStorage.setItem('rol', 'supervisor');
          this.router.navigate(['/supervisor/pages/validar-plaza']);
        } else if (rol == 4) {
          localStorage.setItem('rol', 'admin');
          this.router.navigate(['/admin/pages/home']);
        }
      },
      (error) => {
        if (error.status == 400) {
          swal.fire('Error Login', 'Usuario o clave Incorrecta', 'error');
        }
      }
    );
    this.limpiar();
  }

  limpiar(): void {
    this.usuario = '';
    this.contra = '';
  }
  login() {
    localStorage.setItem('usuario', this.usuario!);

    if (this.usuario == 'lucho' && this.contra == '12345') {
      localStorage.setItem('rol', 'estudiante');
      this.router.navigate(['/estudiante/pages/home']);
    } else if (this.usuario == 'secretaria' && this.contra == 'secre123') {
      localStorage.setItem('rol', 'secretaria');
      this.router.navigate(['/secretaria/pages/home']);
    } else if (this.usuario == 'alvaro' && this.contra == 'alvaro123') {
      localStorage.setItem('rol', 'supervisor');
      this.router.navigate(['/supervisor/pages/validar-plaza']);
    } else if (this.usuario == 'renzo' && this.contra == '12345') {
      localStorage.setItem('rol', 'admin');
      this.router.navigate(['/admin/pages/home']);
    }
  }
}
