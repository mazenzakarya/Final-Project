import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Attendances } from '../../../../service/attendances';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getstudent-rep',
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './getstudent-rep.html',
  styleUrl: './getstudent-rep.css'
})
export class GetstudentRep {
attendanceForm!: FormGroup;
  groups: any[] = [];
  students: any[] = [];

  constructor(
    private fb: FormBuilder,

    private attendanceService: Attendances
  ) {}

  ngOnInit(): void {
    this.attendanceForm = this.fb.group({
      groupId: ['', Validators.required],

    });

    this.attendanceService.getGroups().subscribe({
      next: (data) => {
        this.groups = data;
      },
      error: (err) => {
        console.error('Error loading groups', err);
      }
    });
  }

getAttendance(): void {
  const groupId = this.attendanceForm.value.groupId;

  if (!groupId) return;

  this.attendanceService.getAttendance(groupId).subscribe({
    next: (data) => {
      this.students = data.map((s: any) => ({
        name: s.name,
        statusText: s.status === 1 ? '✅ Present' : '❌ Absent'
      }));
    },
    error: (err) => {
      console.error('Error fetching attendance', err);
      this.students = [];
    }
  });
}

}
