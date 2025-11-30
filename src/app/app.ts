import { Navbar } from './components/navbar/navbar';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Home } from './pages/home/home';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front-produtos');
}
