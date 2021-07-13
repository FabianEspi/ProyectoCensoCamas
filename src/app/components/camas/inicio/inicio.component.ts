import { NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioCamasComponent implements OnInit {

  valor : String;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  NavegarCENSO(){

    this.router.navigateByUrl("../traslado/traslado.html");
    
  }

  NavegacionesID(valor:String){
    
   


  }

}
