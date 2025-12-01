import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';
import { ListarProdutos } from './pages/listar-produtos/listar-produtos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  {
    path: 'listar-produtos',
    component: ListarProdutos,
  },
  {
    path: '**',
    component: NaoEncontrado,
  },
];
