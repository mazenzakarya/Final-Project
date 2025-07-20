import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-groups',
  imports: [CommonModule],
  templateUrl: './get-groups.html',
  styleUrl: './get-groups.css'
})
export class GetGroups {
  groups = [
    {
      groupName: 'Group A',
      courseName: 'Math 101',
      instructorName: 'Mr. Ahmed',
      level: 'Beginner'
    },
    {
      groupName: 'Group B',
      courseName: 'English',
      instructorName: 'Ms. Sara',
      level: 'Intermediate'
    },
    {
      groupName: 'Group C',
      courseName: 'Science',
      instructorName: 'Dr. Hassan',
      level: 'Advanced'
    }
  ];

}
