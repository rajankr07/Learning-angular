import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  name = '';
  email = '';
  age: number | null = null;

  user = {
    name: '',
    email: '',
    age: null as number | null,
  };

  submitForm() {
    console.log({ name: this.name, email: this.email, age: this.age });
  }
}
