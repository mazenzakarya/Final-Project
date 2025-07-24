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
          Validators.maxLength(10)
        ]
      ],
  password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10)
        ]
      ]
  });
serverMessage: string = '';
messageType: 'success' | 'error' | '' = '';
onSubmit() {
  if (this.loginForm.valid) {
    this._Authentcation.login(this.loginForm.value).subscribe({
      next: (response) => {
        if (response && response.token && response.user) {
          this.serverMessage = response.message || 'Login successful!';
          this.messageType = 'success';

          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));

          const role = response.user.role;

          setTimeout(() => {
            if (role === 'Admin') {
              this.router.navigate(['/admin/home']);
            } else if (role === 'Student') {
              this.router.navigate(['/student']);
            } else if (role === 'Instructor') {
              this.router.navigate(['/instructor']);
            } else {
              this.router.navigate(['/']);
            }
          }, 1500); // استنى شوية علشان تظهر الرسالة
        } else {
          this.serverMessage = 'Unexpected response from server.';
          this.messageType = 'error';
        }
      },
     error: (error) => {
        this.serverMessage = 'Login failed. Please try again.';
        this.messageType = 'error';
        console.error('Login Failed:', error);
      }
    });
  } else {
    this.loginForm.markAllAsTouched();
    this.serverMessage = 'Please fill the form correctly.';
    this.messageType = 'error';
  }
}



}
