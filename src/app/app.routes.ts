import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';
import { ListarProdutos } from './pages/listar-produtos/listar-produtos';
import { CriarProduto } from './pages/criar-produto/criar-produto';
import { EditarProduto } from './pages/editar-produto/editar-produto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  {
    path: 'listar-produtos',
    component: ListarProdutos,
  },
  {
    path: 'criar-produto',
    component: CriarProduto,
  },
  {
    path: 'editar-produto',
    component: EditarProduto,
  },

  {
    path: '**',
    component: NaoEncontrado,
  },
];
