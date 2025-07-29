import { Student } from './../../../../service/student';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-student',
  imports: [CommonModule,RouterLink],
  templateUrl: './get-student.html',
  styleUrl: './get-student.css'
})
export class GetStudent implements OnInit {
  private readonly _Student = inject(Student);
  private readonly _ToastrService = inject(ToastrService);

  students: any[] = [];
  isLoading: boolean = false;


  getStudent() {
    this._Student.getAllStudent().subscribe({
      next: (res) => {
        this.students = res;
        console.log(res);
      },
      error: (err) => {
        console.error( err);
      }
    });
  }


deleteStudentById(id: number) {
  this.isLoading = true;

  this._Student.deleteStudent(id).subscribe({
    next: res => {
      setTimeout(() => {
        this._ToastrService.success( 'Student deleted successfully.', 'Success');
        this.getStudent(); // تحديث القائمة
        this.isLoading = false;
      }, 1000); // تأخير ثانية واحدة (1000 ملي ثانية)
    },
    error: err => {
      setTimeout(() => {
        this._ToastrService.error('An error occurred while deleting the student.', 'Error');
        this.isLoading = false;
      }, 1000);
    }
  });
}

  ngOnInit(): void {
    this.getStudent();
  }
}
