import { Routes } from '@angular/router';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';
import { Page3 } from './pages/page3/page3';
import { Ngfor } from './ngfor';

export const ngForRoutes: Routes = [
  {
    path: '',
    component: Ngfor,
    children: [
      { path: '', redirectTo: 'page1', pathMatch: 'full' },
      { path: 'page1', component: Page1, title: 'page one' },
      { path: 'page2', component: Page2, title: 'page two' },
      { path: 'page3', component: Page3, title: 'page three' },
    ],
  },
];
