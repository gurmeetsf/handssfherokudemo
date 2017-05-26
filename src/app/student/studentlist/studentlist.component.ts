import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {MdButtonModule} from '@angular/material';
import {StudentModel} from  '../model/student.model';


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  studentForm : FormGroup;
  constructor(private fb : FormBuilder) {
    this.createForm();
   }

   createForm(){
     this.studentForm = this.fb.group({
       email : ['',Validators.required],
       firstname : ['',Validators.required],
       lastname : ['',Validators.required]

     })
   }

   onSubmit(){
     const formodel = this.studentForm.value;
     let saveStudent : StudentModel ;
     saveStudent = new StudentModel();
     saveStudent.email = formodel.email;
      saveStudent.firstname = formodel.firstname;
       saveStudent.lastname = formodel.lastname;
       console.log(saveStudent);
   }

  ngOnInit() {
  }

}
