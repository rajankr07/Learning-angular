import { Component } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  isLoggedIn = true;
  isActive = false;
  isAvailable = true;

  toggle() {
    this.isActive = !this.isActive;
  }

  login() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  gadgets = ['iPhone', 'MacBook', 'AirPods'];

  products = [
    {
      name: 'iPhone',
      price: 80000,
    },
    {
      name: 'MacBook',
      price: 120000,
    },
    {
      name: 'AirPods',
      price: 20000,
    },
  ];
}
