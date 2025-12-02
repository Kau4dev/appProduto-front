import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  imports: [],
  templateUrl: './form-product.html',
  styleUrl: './form-product.css',
})
export class FormProduct {
  @Input() titulo: string = '';

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    descricao: new FormControl(''),
    preco: new FormControl('', Validators.required),
  });
}
