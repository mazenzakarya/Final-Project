import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Authentcation } from '../service/authentcation';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule ,CommonModule,RouterLink],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {

  private readonly _FormBuilder= inject(FormBuilder)
  private readonly _Authentcation= inject(Authentcation)
  private readonly _ToastrService= inject(ToastrService)
  private readonly router= inject(Router)

  loginForm = this._FormBuilder.group({
  username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]
      ],
  password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ]
      ]
  });
serverMessage: string = '';
messageType: 'success' | 'error' | '' = '';
isLoading=false
onSubmit() {
  if (this.loginForm.valid) {
    this.isLoading = true; // 1. إظهار اللودر

    this._Authentcation.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log(response);

        setTimeout(() => {  // 2. تأخير عرض الرسالة
          this.isLoading = false;

          if (response && response.token && response.user) {
            this.serverMessage = response.message || 'Login successful!';
            this.messageType = 'success';

            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.user.role);
            localStorage.setItem('user', JSON.stringify(response.user));

            const role = response.user.role;

            // 3. تأخير التوجيه برضو لو حبيت
            setTimeout(() => {
              if (role === 'Admin') {
                this.router.navigate(['/admin/home']);
              } else if (role === 'Student') {
                this.router.navigate(['/student/home']);
              } else if (role === 'Instructor') {
                this.router.navigate(['/instructor/homework']);
              } else {
                this.router.navigate(['/']);
              }
            }, 1000); // تأخير التوجيه بعد التوستر
          } else {
            this.serverMessage = 'Unexpected response from server.';
            this.messageType = 'error';
          }
        }, 1000); // تأخير ظهور التوستر لمدة ثانية
      },

      error: (error) => {


        setTimeout(() => {
          this.isLoading = false;
          this.serverMessage = 'Login failed. Please try again.';
          this.messageType = 'error';
        }, 1000); // تأخير ظهور رسالة الخطأ
      }
    });
  } else {
    this.loginForm.markAllAsTouched();
    this.serverMessage = 'Please fill the form correctly.';
    this.messageType = 'error';
  }
}



}
