import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsComponent } from "./students.component";
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'view/:id',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
