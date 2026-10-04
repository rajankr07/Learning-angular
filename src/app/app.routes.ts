import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Home01 } from './Phase-01/home-01/home-01';
import { Home02 } from './Phase-02/home-02/home-02';
import { Parent } from './Phase-01/parent/parent';
import { Child } from './Phase-01/child/child';
import { DataBindingComponent } from './Phase-01/data-binding/data-binding.component';
import { DirectivesComponent } from './Phase-01/directives/directives.component';
import { TaskFormComponent } from './Phase-01/task-form/task-form.component';
import { TaskCounter } from './Phase-01/task-counter/task-counter';
import { TwoWayBindingComponent } from './Phase-01/two-way-binding/two-way-binding.component';
import { UserDetailsComponent } from './Phase-02/user-details-component/user-details-component';
import { Http } from './Phase-02/http/http';

export const routes: Routes = [
  { path: '', component: Home },

  // Phase 01
  { path: 'phase-01', component: Home01 },
  { path: 'phase-01/parent', component: Parent },
  { path: 'phase-01/child', component: Child },
  { path: 'phase-01/data-binding', component: DataBindingComponent },
  { path: 'phase-01/directives', component: DirectivesComponent },
  { path: 'phase-01/task-form', component: TaskFormComponent },
  { path: 'phase-01/task-counter', component: TaskCounter },
  { path: 'phase-01/two-way-binding', component: TwoWayBindingComponent },

  // Phase 02
  { path: 'phase-02', component: Home02 },
  { path: 'phase-02/users/:id', component: UserDetailsComponent },
  {
    path: 'phase-02/lazy-loading',
    loadComponent: () =>
      import('./Phase-02/lazy-loading/lazy-loading').then((m) => m.LazyLoading),
  },
   { path: 'phase-02/http-route', component: Http },
];
