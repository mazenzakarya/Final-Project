import { Sidebar } from './../../Componants/StudentDashBord/sidebar/sidebar';
import { Navbar } from './../../Componants/StudentDashBord/navbar/navbar';
import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-student-layout',
  imports: [Navbar, RouterOutlet, Sidebar],
  templateUrl: './student-layout.html',
  styleUrl: './student-layout.css'
})
export class StudentLayout {

}
