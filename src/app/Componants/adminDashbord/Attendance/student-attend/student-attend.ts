import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Attendances } from '../../../../service/attendances';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-attend',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './student-attend.html',
  styleUrl: './student-attend.css'
})
export class StudentAttend {
  private fb = inject(FormBuilder);
  private attendanceService = inject(Attendances);
  private toastr = inject(ToastrService);

  form: FormGroup;
  groups: any[] = [];
  students: any[] = [];

  constructor() {
    this.form = this.fb.group({
      groupId: [null, Validators.required],
      studentId: [null, Validators.required],
      date: [new Date(), Validators.required],
      status: [1, Validators.required],
      isExcepctionSession: [false]
    });
  }

  ngOnInit(): void {
    this.attendanceService.getGroups().subscribe(res => this.groups = res);
  }

  onGroupChange() {
    const groupId = this.form.value.groupId;
    if (groupId) {
      this.attendanceService.getStudentsInGroup(groupId).subscribe(res => {
        this.students = res;
        this.form.patchValue({ studentId: null });
      });
    }
  }

  submit() {
    if (this.form.valid) {
      const payload = [this.form.value];
      this.attendanceService.markAttendance(payload).subscribe({
        next: () => this.toastr.success('Attendance marked successfully'),
    error: (err) => {
  console.error(err);
  this.toastr.error(err?.error || 'Failed to mark attendance');
}
      });
    }
  }

}
