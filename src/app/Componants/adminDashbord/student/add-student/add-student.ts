import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {
  private readonly _FormBuilder = inject(FormBuilder);
  Studentform = this._FormBuilder.group({
username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      image: [''],
      fatherName: [''],
      motherName: [''],
      parentPhone: ['', [Validators.pattern(/^01[0125][0-9]{8}$/)]],
      nationalId: ['', [Validators.pattern(/^[0-9]{14}$/)]],
      address: [''],
  });


  isInvalid(control: string): boolean {
    const field = this.Studentform.get(control);
    return field?.touched && field?.invalid || false;
  }

  getError(control: string): string {
    const field = this.Studentform.get(control);
    if (!field || !field.errors) return '';

    if (field.errors['required']) return 'This field is required';
    if (field.errors['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters`;
    if (field.errors['pattern']) return 'Invalid format';

    return '';
  }

  onSubmit() {
    if (this.Studentform.invalid) {
      this.Studentform.markAllAsTouched();
      return;
    }

    console.log(this.Studentform.value);
  }


}


