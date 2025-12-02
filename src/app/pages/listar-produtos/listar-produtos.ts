import { Component } from '@angular/core';
import { ProductCardList } from '../../components/product-card-list/product-card-list';
import { ButtonAddProduct } from '../../components/button-add-product/button-add-product';

@Component({
  selector: 'app-listar-produtos',
  imports: [ProductCardList, ButtonAddProduct],
  templateUrl: './listar-produtos.html',
  styleUrl: './listar-produtos.css',
})
export class ListarProdutos {}
