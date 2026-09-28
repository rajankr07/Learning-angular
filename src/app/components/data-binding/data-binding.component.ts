import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  count = 0;

  isDisabled = false;

  placeholderText = 'Enter your name';

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  switchDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  onChange(event: any) {
    console.log(event.target.value);
  }

  save(){
    console.log("form is saved.. ");
  }
}
