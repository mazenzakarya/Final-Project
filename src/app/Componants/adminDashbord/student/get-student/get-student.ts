import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-student',
  imports: [CommonModule,RouterLink],
  templateUrl: './get-student.html',
  styleUrl: './get-student.css'
})
export class GetStudent {
students = [
    {
      username: 'ahmed123',
      name: 'Ahmed Ali',
      role: 'Student',
      gender: 'Male',
      dob: '2005-04-12',
      parentPhone: '01012345678',
      nationalId: '30105230123456',
    },
    {
      username: 'sara567',
      name: 'Sara Mahmoud',
      role: 'Student',
      gender: 'Female',
      dob: '2006-09-25',
      parentPhone: '01098765432',
      nationalId: '30209250123456',
    },
    {
      username: 'mohamed789',
      name: 'Mohamed Mostafa',
      role: 'Student',
      gender: 'Male',
      dob: '2004-01-10',
      parentPhone: '01123456789',
      nationalId: '30001100123456',
    }
  ];
}
