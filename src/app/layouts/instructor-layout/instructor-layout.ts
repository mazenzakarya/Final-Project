import { SideBar } from './../../Componants/Instructor/side-bar/side-bar';
import { Navbar } from './../../Componants/StudentDashBord/navbar/navbar';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-instructor-layout',
  imports: [Navbar,RouterOutlet, SideBar],
  templateUrl: './instructor-layout.html',
  styleUrl: './instructor-layout.css'
})
export class InstructorLayout {

}
