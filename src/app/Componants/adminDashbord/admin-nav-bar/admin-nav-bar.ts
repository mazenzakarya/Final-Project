import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-admin-nav-bar',
  imports: [],
  templateUrl: './admin-nav-bar.html',
  styleUrl: './admin-nav-bar.css'
})
export class AdminNavBar {

  private readonly _Router = inject(Router);
logout() {
  // امسح التوكن أو بيانات المستخدم من التخزين
  localStorage.removeItem('token'); // أو أي اسم خزنته بيه

  // إعادة التوجيه لصفحة تسجيل الدخول
  this._Router.navigate(['/login']);
}
}
