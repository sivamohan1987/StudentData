import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule
  ],
  declarations: [ViewComponent, StudentsComponent]
})
export class StudentsModule { }
