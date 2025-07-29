import { Component, inject } from '@angular/core';
import { Student } from '../../../../service/student';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-userdetials',
  imports: [CommonModule,RouterLink],
  templateUrl: './userdetials.html',
  styleUrl: './userdetials.css'
})
export class Userdetials {
private readonly _Student = inject(Student);

  students: any[] = [];


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




  ngOnInit(): void {
    this.getStudent();
  }
}
