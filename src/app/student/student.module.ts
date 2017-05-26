import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentComponent } from './student.component';
import { routing } from './student.router';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [StudentlistComponent, StudentComponent]
})
export class StudentModule { }
