import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../../service/student';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private readonly _Router = inject(Router);
  loading = false;
  private readonly _fb = inject(FormBuilder);
  private studentService = inject(Student);
  private toastr = inject(ToastrService);


  showEditForm = false;
  editForm: FormGroup = this._fb.group({
    name: ['', Validators.required],
    passwordHash: ['', Validators.required]
  });

  openEditForm() {
    this.showEditForm = true;
  }

  closeEditForm() {
    this.showEditForm = false;
  }

onSubmit() {
  if (this.editForm.valid) {
    this.loading = true; // تشغيل التحميل

    this.studentService.UpdateStudent(this.editForm.value).subscribe({
      next: () => {
        this.toastr.success('Account updated successfully');
        this.loading = false; // إيقاف التحميل
        this.closeEditForm();
      },
      error: (err) => {
        this.toastr.error('Error updating account');
        console.error(err);
        this.loading = false; // إيقاف التحميل حتى لو فيه خطأ
      }
    });
  }
}
  logout() {
    // امسح التوكن أو بيانات المستخدم من التخزين
    localStorage.removeItem('token'); // أو أي اسم خزنته بيه

    // إعادة التوجيه لصفحة تسجيل الدخول
    this._Router.navigate(['/login']);
  }

}

