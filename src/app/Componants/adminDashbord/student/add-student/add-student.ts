import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../../../service/student';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-student',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent {

  isLoading = false; // ✅ متغير اللودر

  private readonly _Student = inject(Student)
  private readonly _ToastrService = inject(ToastrService)
  private readonly _FormBuilder = inject(FormBuilder);

  Studentform = this._FormBuilder.group({
    gender: [null, Validators.required],
    name: [null, Validators.required],
    phoneNumber: [null, [Validators.pattern(/^01[0125][0-9]{8}$/)]],
    username: [null, Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    dob: [null, Validators.required],
    address: [null, Validators.required],
    fatherName: [null, Validators.required],
    motherName: [null, Validators.required],
    parentPhoneNumber: ['', [Validators.pattern(/^01[0125][0-9]{8}$/)]],
  });

  onSubmit() {
    if (this.Studentform.invalid) {
      this.Studentform.markAllAsTouched();
      return;
    }

    this.isLoading = true; // ✅ شغل اللودر

    this._Student.AddStudent(this.Studentform.value).subscribe({
      next: (res) => {
        setTimeout(() => {
          this.isLoading = false;
          this._ToastrService.success(res.message, 'Done');
        }, 1000);

        this.Studentform.reset();
      },
      error: (err) => {
        setTimeout(() => {
          this.isLoading = false;
          this._ToastrService.error('An error occurred during submission', 'Error');
        }, 1000);
      }
    });
  }

}
