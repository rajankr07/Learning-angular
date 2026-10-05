import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';
import { tap } from 'rxjs';

@Component({
  selector: 'app-http',
  imports: [],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {
  constructor(private userService: UserService) {}

  getUsers() {
    //   this.userService
    //     .getUsers()
    //     // .pipe(map((users) => users.map((user) => user.name)))
    //     .pipe(
    //       tap((users) => {
    //         console.log('API response:', users);
    //       }),
    //     )
    //     .subscribe((names) => {
    //       console.log(names);
    //     });

    this.userService
      .getUsers()
      .pipe(
        tap((users) => {
          console.log('Received:', users);
        }),

        map((users) => users.map((user) => user.name)),

        catchError((error) => {
          console.error('Something went wrong:', error);

          return of([]);
        }),
      )
      .subscribe((names) => {
        console.log('Names:', names);
      });
  }
}
