import { Component, inject } from '@angular/core';
import { grades } from '../../../service/student/grades';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grades',
  imports: [CommonModule],
  templateUrl: './grades.html',
  styleUrl: './grades.css'
})
export class Grades {

    private readonly grades=inject(grades)

grade: any = {};

  getGrades(){
    this.grades.getGrades().subscribe({
      next:(res)=>{
        console.log(res);
        this.grade=res

      }
    })
  }

  ngOnInit(): void {
    this.getGrades();
  }

}
