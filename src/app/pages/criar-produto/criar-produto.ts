import { Component } from '@angular/core';
import { FormProduct } from '../../components/form-product/form-product';

@Component({
  selector: 'app-criar-produto',
  imports: [FormProduct],
  templateUrl: './criar-produto.html',
  styleUrl: './criar-produto.css',
})
export class CriarProduto {}
