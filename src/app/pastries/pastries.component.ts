import { Component, OnInit } from '@angular/core';
declare const materilscss: any;
@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.css']
})
export class PastriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    materilscss();
  }

}
