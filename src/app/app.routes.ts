import { Routes } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';

export const routes: Routes = [
  { path: '', component: TaskFormComponent },
  { path: 'task-form', redirectTo: '', pathMatch: 'full' },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'directives', component: DirectivesComponent },
];
