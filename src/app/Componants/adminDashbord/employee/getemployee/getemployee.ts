import { Employees } from './../../../../service/employees';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-getemployee',
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './getemployee.html',
  styleUrl: './getemployee.css'
})
export class Getemployee implements OnInit {
  isLoading: boolean = false;

    editUserForm: FormGroup;
  selectedInstructorId: number | null = null;
 private readonly _Employees=inject(Employees)
 private readonly _ToastrService=inject(ToastrService)

   private readonly fb = inject(FormBuilder);

  constructor() {
    this.editUserForm = this.fb.group({
  name: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  phoneNumber: ['', Validators.required],
  salary: [0, Validators.required],
  gender: ['', Validators.required],
  address: ['', Validators.required],
  password: ['', Validators.required],
  dob: ['', Validators.required],
  role: ['', Validators.required]
});
  }

  instructors: any[] = [];


  getAllInstructors() {
    this._Employees.getAllInstructor().subscribe({
      next: (res) => {
        this.instructors = res;
      },
      error: (err) => {
        this._ToastrService.error('Failed to load instructors');
      }
    });
  }

deleteInstructor(id: number) {
  this.isLoading = true;

  this._Employees.deleteInstructor(id).subscribe({
    next: (res: any) => {
         console.log('✅ Instructor Deleted:', res);
      setTimeout(() => {
        this._ToastrService.success('Instructor deleted successfully.', 'Success');
        this.getAllInstructors();
        this.isLoading = false;
      }, 1000);
    },
    error: (err: any) => {
      setTimeout(() => {
          console.error('❌ Error Occurred:', err);
        this._ToastrService.error('An error occurred while deleting the instructor.', 'Error');
        this.isLoading = false;
      }, 1000);
    }
  });
}
 editUser(user: any) {
  this.editUserForm.patchValue({
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
    salary: user.salary,
    gender: user.gender,
    address: user.address,
    password: user.password,
    dob: user.dob ? user.dob.split('T')[0] : '',
    role: user.role
  });

    this.selectedInstructorId = user.userId;
    console.log(this.selectedInstructorId);

    this.editUserForm.patchValue(user);
    const modal = new (window as any).bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
  }
onUpdate() {
  if (this.selectedInstructorId && this.editUserForm.valid) {
    this.isLoading = true; // 🚀 بدء اللودينج

    const updatedData = {
      ...this.editUserForm.value,
      dob: new Date(this.editUserForm.value.dob).toISOString() // صيغة تاريخ صحيحة
    };

    this._Employees.updateUser(this.selectedInstructorId, updatedData).subscribe({
      next: () => {
        setTimeout(() => { // ⏳ تأخير ثانية
          this.isLoading = false; // ⛔ إيقاف اللودينج
          this._ToastrService.success('User updated successfully.');
          this.getAllInstructors();
          const modalEl = document.getElementById('editModal');
          const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
          modal.hide();
        }, 1000);
      },
      error: (err) => {
        console.error('❌ Update Error:', err);
        setTimeout(() => { // ⏳ نفس التأخير
          this.isLoading = false;
          this._ToastrService.error(err.error?.message || 'Error updating user.');
        }, 1000);
      }
    });
  }
}

 ngOnInit(): void {
    this.getAllInstructors();
  }


}


