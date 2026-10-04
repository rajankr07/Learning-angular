import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-http',
  imports: [],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {
  constructor(private userService: UserService) {}

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
    });
  }
}
