import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { HeroSection } from '../../components/hero-section/hero-section';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [Navbar, HeroSection, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
