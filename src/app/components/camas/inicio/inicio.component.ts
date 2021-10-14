import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioCamasComponent {

  valor: String;
  constructor(private router: Router) { }


  NavegarCENSO() {
    this.router.navigateByUrl("../traslado/traslado.html");
  }


}
