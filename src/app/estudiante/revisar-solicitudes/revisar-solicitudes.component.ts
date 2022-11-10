import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-revisar-solicitudes',
  templateUrl: './revisar-solicitudes.component.html',
  styleUrls: ['./revisar-solicitudes.component.css']
})
export class RevisarSolicitudesComponent implements OnInit, AfterViewInit{

  @ViewChild("cyrcle1") cyrcle1?: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.changeToActiveCyrcle1();
  }

  changeToActiveCyrcle1(){
    this.renderer.addClass(this.cyrcle1?.nativeElement, "active");
  }

  deleteActiveCyrcle1(){
    this.renderer.removeClass(this.cyrcle1?.nativeElement, "active");
  }

}
