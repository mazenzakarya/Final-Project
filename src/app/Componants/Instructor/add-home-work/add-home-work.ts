import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-home-work',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-home-work.html',
  styleUrl: './add-home-work.css'
})
export class AddHomeWork {
    groups = ['Group A', 'Group B'];
  subjects = ['Math', 'Science'];
  setByList = ['Mr. Ahmed', 'Ms. Sara'];
private _FormBuilder = inject(FormBuilder);
homeworkForm = this._FormBuilder.group({
  group: ['', Validators.required],
  subject: ['', Validators.required],
  setBy: ['', Validators.required],
  dueDate: ['', Validators.required],
  description: ['', Validators.required],

});

onSubmit() {
  if (this.homeworkForm.valid) {
    console.log('Form Submitted!', this.homeworkForm.value);
    // Here you can add the logic to handle the form submission, like sending data to a server
  } else {
    console.log('Form is invalid');
  }
}
  get f() {
    return this.homeworkForm.controls;
  }
}

