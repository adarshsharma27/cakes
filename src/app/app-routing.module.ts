import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactusComponent} from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { CakesComponent } from './cakes/cakes.component';
import { CupcakesComponent } from './cupcakes/cupcakes.component';
import { PastriesComponent } from './pastries/pastries.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cakes',component:CakesComponent},
  {path:'cupcakes',component:CupcakesComponent},
  {path:'pastries',component:PastriesComponent},
  {path:'signup',component:SignupComponent},
  {path:'signup/login',component:LoginComponent},
  {path:'login',component:LoginComponent},

  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
