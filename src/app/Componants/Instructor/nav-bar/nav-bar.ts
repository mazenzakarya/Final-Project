import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
    private readonly _Router = inject(Router);
logout() {
  // امسح التوكن أو بيانات المستخدم من التخزين
  localStorage.removeItem('token'); // أو أي اسم خزنته بيه

  // إعادة التوجيه لصفحة تسجيل الدخول
  this._Router.navigate(['/login']);
}
}
