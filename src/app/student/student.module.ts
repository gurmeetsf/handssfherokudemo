import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentComponent } from './student.component';
import {MdInputModule} from '@angular/material';
import { routing } from './student.router';
import {ReactiveFormsModule} from '@angular/forms';
import {MdButtonModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    routing,
    MdInputModule,
    ReactiveFormsModule,
    MdButtonModule
  ],
  declarations: [StudentlistComponent, StudentComponent]
})
export class StudentModule { }
