import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { postulante } from 'src/app/models/postulante';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private postulante: EstudianteService,
    private cookieService: CookieService,
    private router: Router
  ) {}
  postu?: postulante;
  nombre?: string;
  dni?: string;

  ngOnInit(): void {
    var idpostulante = parseInt(sessionStorage.getItem('id')!);
    this.nombre = sessionStorage.getItem('nombre')!;
    this.dni = sessionStorage.getItem('dni')!;
    this.postulante.getSolicitud(idpostulante).subscribe((data) => {
      this.postu = data[0];
    });
  }
  borrar() {
    sessionStorage.clear();
    this.cookieService.deleteAll();
    this.router.navigate(['']);
  }
}
