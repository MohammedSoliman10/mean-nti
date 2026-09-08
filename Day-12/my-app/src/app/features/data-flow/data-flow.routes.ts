import { Routes } from '@angular/router';
import { DataFlow } from './data-flow';
import { NgIf } from './pages/ng-if/ng-if';
import { ngForRoutes } from './pages/ngfor/ngfor.routes';


export const dataFlowRoutes: Routes = [
  {
    path: '',
    component: DataFlow,
    children: [
      { path: '' , redirectTo:'ngif', pathMatch: 'full'},
      { path: 'ngif', component: NgIf , title: 'NgIf'},
      { path: 'ngfor', children: ngForRoutes },
    ]
  }
 ];
