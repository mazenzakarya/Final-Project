import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-Addgroup',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './group.html',
  styleUrl: './group.css'
})
export class AddGroup {
 private fb = inject(FormBuilder);

  groupForm: FormGroup = this.fb.group({
    groupName: ['', [Validators.required, Validators.minLength(3)]],
    courseName: ['', Validators.required],
    instructorName: ['', Validators.required],
    level: ['', Validators.required]
  });

  get f() {
    return this.groupForm.controls;
  }

  onSubmit() {
    if (this.groupForm.valid) {
      console.log(this.groupForm.value);
    }
  }
}
