import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StudentComponent } from './student.component';

const routes: Route[] = [
  {
    path: '',
    component: StudentComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
