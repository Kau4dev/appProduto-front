import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-confirm',
  imports: [CommonModule],
  templateUrl: './modal-confirm.html',
  styleUrl: './modal-confirm.css',
})
export class ModalConfirm {
  @Input() titulo: string = '';
  @Input() mensagem: string = '';
  @Output() confirmado = new EventEmitter<void>();
  @Output() cancelado = new EventEmitter<void>();

  onConfirmar() {
    this.confirmado.emit();
  }

  onCancelar() {
    this.cancelado.emit();
  }
}
