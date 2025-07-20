import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gethomework',
  imports: [CommonModule],
  templateUrl: './gethomework.html',
  styleUrl: './gethomework.css'
})
export class Gethomework {
    homeworks = [
    {
      groupName: 'Group A',
      subjectName: 'Math',
      description: 'Solve exercises 1-10 on page 5',
      dueDate: '2025-07-22',
      setBy: 'Mr. Ali'
    },
    {
      groupName: 'Group B',
      subjectName: 'Science',
      description: 'Read chapter 3 and write summary',
      dueDate: '2025-07-24',
      setBy: 'Ms. Sarah'
    },
    {
      groupName: 'Group C',
      subjectName: 'English',
      description: 'Write an essay about your holiday',
      dueDate: '2025-07-25',
      setBy: 'Mrs. Mona'
    }
  ];

}
