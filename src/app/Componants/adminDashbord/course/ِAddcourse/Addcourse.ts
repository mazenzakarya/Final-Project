import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../../service/course';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-Addcourse',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterLink,CommonModule ],
  templateUrl: './Addcourse.html',
  styleUrls: ['./Addcourse.css']
})
export class AddCourse implements OnInit {
  private _FormBuilder = inject(FormBuilder);
  private _Course = inject(Course);
  private toastr = inject(ToastrService);

  createCourseForm = this._FormBuilder.group({
    name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    description: [null, [Validators.required]],
  });
isLoading = false;
onSubmit(): void {
  if (this.createCourseForm.valid) {
    this.isLoading = true;

    this._Course.AddCourse(this.createCourseForm.value).subscribe({
      next: () => {
      setTimeout(() => {
          this.isLoading = false;
          this.toastr.success('Course added successfully!', 'Success');
          this.createCourseForm.reset();
        }, 1000); // 2 ثواني
      },
      error: (error) => {
        this.toastr.error('Error adding course', 'Error');
        console.error('Error adding course:', error);
        this.isLoading = false;
      }
    });
  } else {
    this.toastr.warning('Please fill all required fields', 'Warning');
  }
}



  get f() {
    return this.createCourseForm.controls;
  }

  ngOnInit() {
}
}
