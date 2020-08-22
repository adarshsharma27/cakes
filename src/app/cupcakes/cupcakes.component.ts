import { Component, OnInit } from '@angular/core';
declare const materilscss: any;
@Component({
  selector: 'app-cupcakes',
  templateUrl: './cupcakes.component.html',
  styleUrls: ['./cupcakes.component.css']
})
export class CupcakesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    materilscss();
  }

}
