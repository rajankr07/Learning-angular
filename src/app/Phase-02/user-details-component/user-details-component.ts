import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details-component',
  imports: [],
  templateUrl: './user-details-component.html',
  styleUrl: './user-details-component.css',
})
export class UserDetailsComponent {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
