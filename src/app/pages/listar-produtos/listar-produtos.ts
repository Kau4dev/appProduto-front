import { Component } from '@angular/core';
import { ProductCardList } from '../../components/product-card-list/product-card-list';

@Component({
  selector: 'app-listar-produtos',
  imports: [ProductCardList],
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {}
