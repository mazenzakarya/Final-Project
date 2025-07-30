import { CommonModule } from '@angular/common';
import { attendance } from './../../../service/student/attendance';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-attendance',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css'
})
export class Attendance {

}
