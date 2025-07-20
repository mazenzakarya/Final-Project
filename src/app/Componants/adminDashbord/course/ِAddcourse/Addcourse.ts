import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-Addcourse',
  imports: [ ReactiveFormsModule ],
  templateUrl: './Addcourse.html',
  styleUrls: ['./Addcourse.css']
})
export class AddCourse {
private _FormBuilder=inject(FormBuilder);


createCourseForm = this._FormBuilder.group({
  courseName: [null, [Validators.required, Validators.minLength(3)]],
  level: [null, [Validators.required]],
})

onSubmit(): void {
  if (this.createCourseForm.valid) {
    console.log('Form Submitted', this.createCourseForm.value);
  } else {
    console.log('Form is invalid');
  }
}

get f() {
  return this.createCourseForm.controls;
}
}

