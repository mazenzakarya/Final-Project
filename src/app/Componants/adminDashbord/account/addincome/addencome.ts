import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Fees } from '../../../../service/fees';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addencome',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './addencome.html',
  styleUrl: './addencome.css'
})
export class Addencome {
  feeForm!: FormGroup;
  students: any[] = [];
  groupName = '';
  courseName = '';
  selectedGroupId = 0;
  selectedCourseId = 0;

  // Inject dependencies
  private fb = inject(FormBuilder);
  private toastr = inject(ToastrService);
  private feeService = inject(Fees);

  ngOnInit(): void {
    this.initializeForm();
    this.loadStudents();
  }

  private initializeForm(): void {
    this.feeForm = this.fb.group({
      studentId: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      discount: [0],
      type: [1, Validators.required],
      notes: ['', Validators.required],
      groupId: [null],
      courseId: [null]
    });
  }

  private loadStudents(): void {
    this.feeService.getStudents().subscribe({
      next: (data) => this.students = data,
      error: () => this.toastr.error('❌ Failed to load students.')
    });
  }

onStudentChange(event: Event): void {
  const selectedId = +(event.target as HTMLSelectElement).value;

  if (!selectedId) {
    this.groupName = '';
    this.courseName = '';
    this.selectedGroupId = 0;
    this.selectedCourseId = 0;
    this.feeForm.patchValue({
      groupId: null,
      courseId: null
    });
    return;
  }

  this.feeService.getStudentGroupDetails(selectedId).subscribe({
    next: (data) => {
      this.groupName = data.groupName;
      this.courseName = data.courseName;
      this.selectedGroupId = data.groupId;
      this.selectedCourseId = data.courseId;

      // ✅ خلي الفورم ياخد الـ IDs علشان يتبعتوا معاه
      this.feeForm.patchValue({
        groupId: data.groupId,
        courseId: data.courseId
      });
    },
    error: () => this.toastr.error('❌ Failed to load student group details.')
  });
}


  submitFee(): void {
  if (this.feeForm.invalid) {
    this.toastr.warning('🛑 Please complete all required fields correctly.');
    return;
  }

  this.feeService.addFee(this.feeForm.value).subscribe({
    next: (res) => {
      console.log(res);

      this.toastr.success('✅ Fee added successfully!');
      this.resetForm();
    },
    error: () => this.toastr.error('❌ Failed to add fee.')
  });
}




  private resetForm(): void {
    this.feeForm.reset({ amount: 0, discount: 0, type: 1 });
    this.groupName = '';
    this.courseName = '';
    this.selectedGroupId = 0;
    this.selectedCourseId = 0;
  }

}
