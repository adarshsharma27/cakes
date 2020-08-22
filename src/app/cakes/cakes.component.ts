import { Component, OnInit } from '@angular/core';
declare const materilscss: any;
@Component({
  selector: 'app-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.css']
})
export class CakesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    materilscss();
  }

}
