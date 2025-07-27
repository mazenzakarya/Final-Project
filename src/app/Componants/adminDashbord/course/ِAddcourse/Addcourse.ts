import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../../service/course';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Addcourse',
  standalone: true,
  imports: [ ReactiveFormsModule, RouterLink ],
  templateUrl: './Addcourse.html',
  styleUrls: ['./Addcourse.css']
})
export class AddCourse implements OnInit {
  private _FormBuilder = inject(FormBuilder);
  private _Course = inject(Course);
  private toastr = inject(ToastrService);

  createCourseForm = this._FormBuilder.group({
    name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    description: [null, [Validators.required]],
  });

  onSubmit(): void {
    if (this.createCourseForm.valid) {
      this._Course.AddCourse(this.createCourseForm.value).subscribe({
        next: (response) => {
          this.toastr.success('Course added successfully!', 'Success');
          console.log('Course added successfully', response);
        },
        error: (error) => {
          this.toastr.error('Error while adding course', 'Error');
          console.error('Error adding course', error);
        }
      });
    } else {
      this.toastr.warning('Please fill in all required fields', 'Invalid Form');
    }
  }

  get f() {
    return this.createCourseForm.controls;
  }

  ngOnInit() {
}
}
