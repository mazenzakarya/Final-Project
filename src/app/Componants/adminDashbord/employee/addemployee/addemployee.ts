import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee {
  private readonly _FormBuilder = inject(FormBuilder);
  addEmployeeForm = this._FormBuilder.group({
    username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      dob: [''],
      gender: ['', Validators.required],
      image: [''],
      email: ['', [Validators.email]],
      salary: ['', [Validators.required, Validators.min(0)]],
      address: [''],
  });

    isInvalid(control: string): boolean {
    const field = this.addEmployeeForm.get(control);
    return field?.touched && field?.invalid || false;
  }

  getError(control: string): string {
    const field = this.addEmployeeForm.get(control);
    if (!field || !field.errors) return '';

    if (field.errors['required']) return 'This field is required';
    if (field.errors['minlength']) return `Minimum ${field.errors['minlength'].requiredLength} characters`;
    if (field.errors['pattern']) return 'Invalid format';
    if (field.errors['email']) return 'Invalid email format';
    if (field.errors['min']) return 'Salary must be positive';
    
    return '';
  }

  onSubmit() {
    if (this.addEmployeeForm.invalid) {
      this.addEmployeeForm.markAllAsTouched();
      return;
    }

    console.log(this.addEmployeeForm.value);
  }





}
