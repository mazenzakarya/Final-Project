import { GetStudent } from './../../student/get-student/get-student';
import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../../../service/student';
import { Group } from '../../../../service/group';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-std-group',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-std-group.html',
  styleUrl: './add-std-group.css'
})
export class AddStdGroup implements OnInit {


private readonly _Student=inject(Student)
private readonly _Group=inject(Group)
private readonly _ToastrService=inject(ToastrService)
 private fb = inject(FormBuilder);

  allStudent:any[]=[];
  allGroups:any[]=[];

  form: FormGroup = this.fb.group({
    groupId: [null, Validators.required],
    studentId: [null, Validators.required]
  });
getStudent(){
  this._Student.getAllStudent().subscribe({
    next:(res)=>{
      console.log(res);
      this.allStudent=res

    }
  })
}

getgroup(){
  this._Group.getGroup().subscribe({
    next:(res)=>{
      console.log(res);
      this.allGroups=res

    }
  })
}
  ngOnInit(): void {
this.getStudent();
this.getgroup();
  }





 onSubmit() {
  if (this.form.valid) {
    const data = this.form.value;
    console.log('Form Data:', data);
    this._Group.AssignStudent(data).subscribe({
      next: () => {
        this._ToastrService.success("Student assigned successfully");
        this.form.reset();
      },
      error: () => {
        this._ToastrService.error("Something went wrong");
      }
    });
  }
}

}
