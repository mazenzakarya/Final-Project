import { CommonModule } from '@angular/common';
import { GetGroup } from './../../../service/student/get-group';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-courses',
  imports: [CommonModule],
  templateUrl: './my-courses.html',
  styleUrl: './my-courses.css'
})
export class MyCourses implements OnInit {

  private readonly _GetGroup=inject(GetGroup)

group: any = {};

  getGroups(){
    this._GetGroup.getGroup().subscribe({
      next:(res)=>{
        console.log(res);
        this.group=res

      }
    })
  }

  ngOnInit(): void {
this.getGroups();
  }

}
