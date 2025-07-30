import { Component, inject, OnInit } from '@angular/core';
import { Student } from '../../../../service/student';
import { Course } from '../../../../service/course';
import { Subject } from '../../../../service/subject';
import { HomeWork } from '../../../../service/home-work';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-grade',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-grade.html',
  styleUrl: './add-grade.css'
})
export class AddGrade implements OnInit {

  private readonly _Student=inject(Student)
  private readonly _Course=inject(Course)
  private readonly _Subject=inject(Subject)
  private readonly _HomeWork=inject(HomeWork)
  private readonly _ToastrService=inject(ToastrService)

    private fb = inject(FormBuilder);

  allStudent:any[]=[];
  AllCource:any[]=[]
AllSubject:any[]=[]
AllHomeWork:any[]=[]
isLoading=false;
  Gradeform: FormGroup = this.fb.group({
    studentId: [null, Validators.required],
    courseId: [null, Validators.required],
    subjectId: [null, Validators.required],
    elementId: [null, Validators.required],
    score: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
    notes: ['']
  });


  getStudent(){
  this._Student.getAllStudent().subscribe({
    next:(res)=>{
      console.log(res);
      this.allStudent=res

    }
  })
}

  getAllCourses(){
    this._Course.getAllCourses().subscribe({
      next:(res)=>{
        console.log(res);
        this.AllCource=res

      }
    })
  }

    getAllSubject(){
    this._Subject.getAllSubjects().subscribe({
      next:(res)=>{
        console.log(res);
        this.AllSubject=res

      }
    })
  }

    getAllHomeWork(){
    this._HomeWork.getHomeWork().subscribe({
      next:(res)=>{
        console.log(res);
        this.AllHomeWork=res

      }
    })
  }

ngOnInit(): void {

  this.getAllCourses();
  this.getAllHomeWork();
  this.getAllSubject();
  this.getStudent();

}



 onSubmit() {
  if (this.Gradeform.invalid) {
    this._ToastrService.warning('Please fill all required fields correctly.');
    return;
  }

  const gradeData = this.Gradeform.value;
  console.log('Submitting Grade:', gradeData);

  this.isLoading = true;

  this._HomeWork.addGrade(gradeData).subscribe({
    next: () => {
      this.isLoading = false;
      this._ToastrService.success('Grade submitted successfully!');
      this.Gradeform.reset();
    },
    error: (err) => {
      this.isLoading = false;
      console.error('Error submitting grade:', err);
      this._ToastrService.error('Failed to submit grade. Please try again.');
    }
  });
}

}
