import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },

  {
    path: '**',
    component: NaoEncontrado,
  },
];
