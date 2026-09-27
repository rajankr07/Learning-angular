import { Routes } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';
// import { Parent } from './components/parent/parent.component';
import { Routing } from './pages/routing/routing';
import { Parent } from './components/parent/parent.component';
import { Child } from './components/child/child.component';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: 'task-form', component: TaskFormComponent },
  { path: '', component: Home },
  { path: 'routing', component: Routing },
  { path: 'parent', component: Parent },
  { path: 'child', component: Child },
];
