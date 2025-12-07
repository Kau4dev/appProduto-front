import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input() tipo: 'success' | 'danger' | 'warning' | 'info' = 'info';
  @Input() mensagem: string = '';
}
