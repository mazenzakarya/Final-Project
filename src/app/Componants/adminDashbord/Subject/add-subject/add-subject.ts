import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-subject',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './add-subject.html',
  styleUrl: './add-subject.css'
})
export class AddSubject {

  groups = ['Group A', 'Group B', 'Group C'];
private _FormBuilder=inject(FormBuilder)

creatSubjectForm = this._FormBuilder.group({
  GroupName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
  subjectName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
  grade: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
})

submitForm() {
  if (this.creatSubjectForm.valid) {
    console.log('Form Submitted', this.creatSubjectForm.value);
  }
}

get f(){
  return this.creatSubjectForm.controls;
}
}
