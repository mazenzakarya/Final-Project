import { CommonModule } from '@angular/common';
import {  attendances } from './../../../service/student/attendance';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-attendance',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css'
})
export class Attendance implements OnInit {
private readonly _attendances=inject(attendances)
attendancesList: any[] = [];
presentCount: number = 0;
lateCount: number = 0;
absentCount: number = 0;
attendancePercentage: number = 0;
getAttendenc() {
  this._attendances.getAttendenc().subscribe({
    next: (res) => {
      this.attendancesList = res;

      // تصفير العدادات
      this.presentCount = 0;
      this.lateCount = 0;
      this.absentCount = 0;

      // حساب القيم
      for (let record of this.attendancesList) {
        if (record.status === 'Present') this.presentCount++;
        else if (record.status === 'Late') this.lateCount++;
        else if (record.status === 'Absent') this.absentCount++;
      }

      const total = this.attendancesList.length;
      this.attendancePercentage = total > 0 ? Math.round((this.presentCount / total) * 100) : 0;
    },
    error: (err) => {
      console.error(err);
    }
  });
}


ngOnInit(): void {
this.getAttendenc();
}
}
