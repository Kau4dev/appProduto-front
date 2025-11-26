import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HeroSection } from './components/hero-section/hero-section';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HeroSection, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('front-produtos');
}
