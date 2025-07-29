import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../../service/course';
import { Employees } from '../../../../service/employees';
import { ToastrService } from 'ngx-toastr';
import { Group } from '../../../../service/group';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Addgroup',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './group.html',
  styleUrl: './group.css'
})
export class AddGroup implements OnInit {
  private fb = inject(FormBuilder);
  private _Course = inject(Course);
  private _Employees = inject(Employees);
  private _Group = inject(Group);
  private _ToastrService = inject(ToastrService);
  courses: any[] = [];
  instructors: any[] = [];

  isLoading: boolean = false;


  groupForm: FormGroup = this.fb.group({
    name: [ null, [Validators.required, Validators.minLength(4)]],
    courseId: [ null, Validators.required],
    levelDescription: ['', Validators.required],
    teacherId: [ null, Validators.required],
    amount: [ null, [Validators.required, Validators.min(1)]],
    levelStartDate: [null, Validators.required],
    levelEndDate: [ null, Validators.required],
    nextPaymentDate: [ null, Validators.required],
  });

  get f() {
    return this.groupForm.controls;
  }

  onSubmit() {
    if (this.groupForm.valid) {
      console.log(this.groupForm.value);

    this.isLoading = true;
    this._Group.AddGroup(this.groupForm.value).subscribe({
      next: (res) => {
        console.log(res);
        setTimeout(() => {
          this.isLoading = false;
          this._ToastrService.success("Group Added successfully", 'Done');
        }, 1000);
      },
      error: (err) => {
        console.log(err);
        this._ToastrService.error('Error adding course', 'Error');
        console.error('Error adding course:', err);
        if (err.error && err.error.errors) {
  console.log('Validation errors:', err.error.errors);
}
        this.isLoading = false;
      }
    });

  } else {
      this._ToastrService.warning('Please fill all required fields ⚠️'); // ✅ توستر تحذير
    }
  }

  getCourses() {
    this._Course.getAllCourses().subscribe({
      next: (res) => {
        this.courses = res;
      },
      error: (err) => console.error(err)
    });
  }

  getInstructors() {
    this._Employees.getAllInstructor().subscribe({
      next: (res) => {
        this.instructors = res;
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.getCourses();
    this.getInstructors();

    // لما يتغير الكورس نعمل التحديث
    this.groupForm.get('courseId')?.valueChanges.subscribe((courseId) => {
      const selectedCourse = this.courses.find(c => c.courseId == courseId);
      const levelDesc = selectedCourse ? `${selectedCourse.name} - ${selectedCourse.description}` : '';
      this.groupForm.patchValue({ levelDescription: levelDesc });
    });
  }
}
