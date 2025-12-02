import { Component } from '@angular/core';
import { FormProduct } from '../../components/form-product/form-product';

@Component({
  selector: 'app-editar-produto',
  imports: [FormProduct],
  templateUrl: './editar-produto.html',
  styleUrl: './editar-produto.css',
})
export class EditarProduto {}
