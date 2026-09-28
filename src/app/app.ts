import { Component, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private location = inject(Location);
  private router = inject(Router);

  // true on every page except the global home ('/')
  showBack = signal(false);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showBack.set(event.urlAfterRedirects !== '/');
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
