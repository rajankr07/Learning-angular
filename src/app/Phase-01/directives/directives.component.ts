import { Component } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, NgFor],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  isActive = false;
  isAvailable = true;

  toggle() {
    this.isActive = !this.isActive;
  }

  products = [
    {
      name: 'iPhone',
      price: 80000,
    },
    {
      name: 'MacBook',
      price: 120000,
    },
  ];
}
