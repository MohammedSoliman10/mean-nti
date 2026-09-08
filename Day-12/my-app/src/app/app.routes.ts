import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', loadComponent: () => import('./about-component/about-component').then((m) => m.AboutComponent) },


  { path: 'teams', loadComponent : () => import('./team/team').then((m) => m.Team)},
  { path: 'team/:id', loadComponent : () => import('./team/team-detalis/team-detalis').then((m) => m.TeamDetalis)},


  { path: 'data-flow' ,loadChildren: () => import('./features/data-flow/data-flow.routes').then((m) => m.dataFlowRoutes)   },
  {path: '**', component: Notfound}
];
