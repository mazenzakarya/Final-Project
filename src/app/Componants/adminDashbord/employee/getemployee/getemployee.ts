import { Employees } from './../../../../service/employees';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-getemployee',
  imports: [CommonModule,RouterLink],
  templateUrl: './getemployee.html',
  styleUrl: './getemployee.css'
})
export class Getemployee implements OnInit {
  isLoading: boolean = false;
 private readonly _Employees=inject(Employees)
 private readonly _ToastrService=inject(ToastrService)

  instructors: any[] = [];


  getAllInstructors() {
    this._Employees.getAllInstructor().subscribe({
      next: (res) => {
        this.instructors = res;
      },
      error: (err) => {
        this._ToastrService.error('Failed to load instructors');
      }
    });
  }

deleteInstructor(id: number) {
  this.isLoading = true;

  this._Employees.deleteInstructor(id).subscribe({
    next: (res: any) => {
         console.log('✅ Instructor Deleted:', res);
      setTimeout(() => {
        this._ToastrService.success('Instructor deleted successfully.', 'Success');
        this.getAllInstructors(); // تحديث القائمة بعد الحذف
        this.isLoading = false;
      }, 1000); // تأخير ثانية واحدة (1000 ملي ثانية)
    },
    error: (err: any) => {
      setTimeout(() => {
          console.error('❌ Error Occurred:', err);
        this._ToastrService.error('An error occurred while deleting the instructor.', 'Error');
        this.isLoading = false;
      }, 1000);
    }
  });
}

 ngOnInit(): void {
    this.getAllInstructors();
  }


}


