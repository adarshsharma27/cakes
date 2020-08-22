import { Component} from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
declare const materilscss: any;
AOS.init();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'cake-app';
  constructor() { }
  ngOnInit(){ 
    materilscss();
}
}