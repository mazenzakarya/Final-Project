import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employees } from '../../../../service/employees';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.css'
})
export class Addemployee {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _ToastrService = inject(ToastrService);
  private readonly _Employees = inject(Employees);
  isLoading = false;
  addEmployeeForm = this._FormBuilder.group({
    role: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    name: ['', Validators.required],
    phoneNumber: ['', [
      Validators.required,
      Validators.pattern(/^01[0-9]{9}$/)
    ]], email: ['', [Validators.email]],
    salary: ['', [Validators.required, Validators.min(0)]],
    gender: ['', Validators.required],
    dob: [null, Validators.required],
    address: [null, Validators.required],
  });


  onSubmit() {
    if (this.addEmployeeForm.invalid) {
      this.addEmployeeForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    this._Employees.AddEmployee(this.addEmployeeForm.value).subscribe({
      next: (res) => {
        console.log(res);

        setTimeout(() => {
          this.isLoading = false;
          this._ToastrService.success('Employee added successfully');
          this.addEmployeeForm.reset();
        }, 1000);
      },
      error: (err) => {
        this.isLoading = false;
        this._ToastrService.error('Failed to add the employee')
      }
    });
  }
}






