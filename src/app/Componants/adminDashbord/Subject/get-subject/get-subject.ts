import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-subject',
  imports: [CommonModule],
  templateUrl: './get-subject.html',
  styleUrl: './get-subject.css'
})
export class GetSubject {
  subjects: any[] = [
    { groupName: 'Group A', subjectName: 'Math', mark: 90 },
    { groupName: 'Group B', subjectName: 'English', mark: 85 }
  ];
}
