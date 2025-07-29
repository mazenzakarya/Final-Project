import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject } from '../../../../service/subject';
import { Course } from '../../../../service/course';
import { Group } from '../../../../service/group';
import { ToastrService } from 'ngx-toastr';
import { HomeWork } from '../../../../service/home-work';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addhome-work',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './addhome-work.html',
  styleUrl: './addhome-work.css'
})
export class AddhomeWork implements OnInit {

private _FormBuilder = inject(FormBuilder);
private _Subject = inject(Subject);
private _Course = inject(Course);
private _Group = inject(Group);
private _HomeWork = inject(HomeWork);
private _ToastrService = inject(ToastrService);
AllCource:any[]=[]
AllSubject:any[]=[]
Allgroup:any[]=[]
isLoading:boolean=false;

homeworkForm = this._FormBuilder.group({
  subjectId: [null, Validators.required],
  courseId: [null, Validators.required],
  groupId: [null, Validators.required],
  description: ['', Validators.required],
  date: ['', Validators.required],
  dueDate: ['', Validators.required],
  totalMarks: [null, Validators.required],

});
onSubmit() {
  if (this.homeworkForm.valid) {
    console.log(this.homeworkForm.value); // ✅ للتأكد من البيانات

    this.isLoading = true;

    this._HomeWork.addHomeWork(this.homeworkForm.value).subscribe({
      next: (res) => {
        console.log(res); // ✅ تأكيد الاستجابة
        setTimeout(() => {
          this.isLoading = false;
          this._ToastrService.success('Homework added successfully', 'Done'); // ✅ توستر نجاح
          this.homeworkForm.reset(); // ✅ تفريغ الفورم
        }, 1000);
      },
      error: (err) => {
        console.log(err); // ✅ طباعة الخطأ الكامل
        this._ToastrService.error('Error adding homework', 'Error'); // ✅ توستر خطأ

        if (err.error && err.error.errors) {
          console.log('Validation errors:', err.error.errors); // ✅ الأخطاء التفصيلية
        }

        this.isLoading = false;
      }
    });

  } else {
    this._ToastrService.warning('Please complete all required fields ⚠️'); // ✅ توستر تحذير
  }
}



  get f() {
    return this.homeworkForm.controls;
  }


  getAllCourses(){
    this._Course.getAllCourses().subscribe({
      next:(res)=>{
        console.log(res);
        this.AllCource=res

      }
    })
  }

  getAllGroup(){
    this._Group.getGroup().subscribe({
      next:(res)=>{
        console.log(res);
        this.Allgroup=res

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
  ngOnInit(): void {
this.getAllCourses();
this.getAllGroup();
this.getAllSubject();
  }
}
