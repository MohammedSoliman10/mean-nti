import { Routes } from '@angular/router';
import { HomeComponent } from './homeComponent/home.component';
import { AboutComponent } from './aboutComponent/about.component';
import { Notfound } from './notfound/notfound';
import { MohammedSoliman } from './mohammed-soliman/mohammed-soliman';
import { Barcelona } from './barcelona/barcelona';

export const routes: Routes = [

 {path: '' ,redirectTo: 'home' ,pathMatch: 'full'},
 {path : 'home' , component : HomeComponent},
 {path : 'aboutus' , component : AboutComponent},
 {path : 'mohammed-soliman' , component : MohammedSoliman},
 {path : 'barcelona' , component : Barcelona},
 {path : "**" , component : Notfound}

];
