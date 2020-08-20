import { Component } from '@angular/core';
import * as $ from 'jquery';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cake-app';
  ngOnInit(): void{
    
  $(document).ready(function(){
    $('.sidenav').sidenav();
    
    $('.carousel').carousel({
indicators:true,
    duration:100

    }

    );
  
  $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('.gal a').simpleLightbox();
  });
  
}
}