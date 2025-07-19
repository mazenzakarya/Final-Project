import { Home } from './home/home';
import { Routes } from '@angular/router';
import { MyCourses } from './my-courses/my-courses';
import { Assignments } from './assignments/assignments';
import { Exams } from './exams/exams';
import { Grades } from './grades/grades';
import { Attendance } from './attendance/attendance';

export const studentRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'courses', component: MyCourses },
  { path: 'assignments', component: Assignments },
  { path: 'exams', component: Exams },
  { path: 'grades', component: Grades },
  { path: 'attendance', component: Attendance }
];
