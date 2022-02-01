import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower:string = 'alan';
  nombreUpper:string = 'ALAN';
  nombreCompleto:string = 'aLaN maQuedA';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
