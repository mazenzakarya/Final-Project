import { CommonModule } from '@angular/common';
import { Course } from './../../../../service/course';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-getcourses',
  imports: [RouterLink,CommonModule],
  templateUrl: './getcourses.html',
  styleUrl: './getcourses.css'
})
export class Getcourses implements OnInit {
  courses:any = [];
  private _Course = inject(Course);
  private _toastr = inject(ToastrService);
  ngOnInit() {
    this._Course.getAllCourses().subscribe({
      next: (data) => {
        this.courses = data;
        console.log('Courses fetched successfully:', this.courses);

      },
      error: (err) => {
        console.error('Error fetching courses:', err);
      }
    });
  }


deleteCourse(Id: number) {
  if (confirm("Are you sure you want to delete this course?")) {
    this._Course.deleteCourse(Id).subscribe({
      next: () => {
        const index = this.courses.findIndex((course: any) => course.courseId === Id);
        if (index !== -1) {
          this.courses.splice(index, 1); // Remove the item from the array
        }
        this._toastr.success('Course deleted successfully ✅', 'Success');
      },
      error: (err) => {
        this._toastr.error('An error occurred while deleting the course ❌', 'Error');
        console.error('Error deleting course:', err);
      }
    });
  }
}


}

