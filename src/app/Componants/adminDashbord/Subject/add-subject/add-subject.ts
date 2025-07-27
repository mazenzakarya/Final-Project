import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from '../../../../service/subject';
import { Course } from '../../../../service/course';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  imports: [ReactiveFormsModule , CommonModule,RouterLink],
  templateUrl: './add-subject.html',
  styleUrl: './add-subject.css'
})
export class AddSubject implements OnInit {

courses: any[] = [];
private _FormBuilder=inject(FormBuilder)
  private _Toastr = inject(ToastrService);
private _Subject=inject(Subject)
private _Course=inject(Course)



creatSubjectForm = this._FormBuilder.group({
name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
courseId: [null, [Validators.required]],
})
  submitForm() {
    if (this.creatSubjectForm.valid) {
      this._Subject.AddSubject(this.creatSubjectForm.value).subscribe({
        next: (response) => {
          this._Toastr.success('Subject added successfully ✅'); // ✅ توستر نجاح
          this.creatSubjectForm.reset();
        },
        error: (error) => {
          this._Toastr.error('Error adding subject ❌'); // ✅ توستر خطأ
          console.error('Error adding subject', error);
        }
      });
    } else {
      this._Toastr.warning('Please fill all required fields ⚠️'); // ✅ توستر تحذير
    }
  }

get f(){
  return this.creatSubjectForm.controls;
}


ngOnInit() {
  this._Course.getAllCourses().subscribe({
    next: (courses) => {
      this.courses = courses;
    },
    error: (error) => {
      console.error('Error fetching courses', error);
    }
  });
}
}
