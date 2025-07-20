import { Component } from '@angular/core';

@Component({
  selector: 'app-getcourses',
  imports: [],
  templateUrl: './getcourses.html',
  styleUrl: './getcourses.css'
})
export class Getcourses {
  courses = [
    { name: 'English Basics', level: 'Beginner' },
    { name: 'Mathematics', level: 'Intermediate' },
    { name: 'Physics', level: 'Advanced' },
    { name: 'Chemistry', level: 'Beginner' },
    { name: 'Biology', level: 'Intermediate' },
  ];
}
