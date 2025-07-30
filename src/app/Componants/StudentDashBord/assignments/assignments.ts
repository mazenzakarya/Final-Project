import { Component, inject, OnInit } from '@angular/core';
import { Assiment } from '../../../service/student/assiment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignments',
  imports: [CommonModule],
  templateUrl: './assignments.html',
  styleUrl: './assignments.css'
})
export class Assignments implements OnInit {
    private readonly _Assiment=inject(Assiment)

Assiments: any = {};

  getAssiment(){
    this._Assiment.getAssiment().subscribe({
      next:(res)=>{
        console.log(res);
        this.Assiments=res

      }
    })
  }

  ngOnInit(): void {
    this.getAssiment();
  }
}
