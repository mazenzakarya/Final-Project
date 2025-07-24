import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-getemployee',
  imports: [CommonModule,RouterLink],
  templateUrl: './getemployee.html',
  styleUrl: './getemployee.css'
})
export class Getemployee {
  employees = [
  {
    username: 'admin001',
    name: 'Ahmed Ali',
    role: 'Admin',
    dob: '1990-01-01',
    email: 'admin@example.com',
    salary: 12000,
    gender: 'Male',
    address: 'Cairo, Egypt',
    image: 'https://i.pravatar.cc/100?img=1'
  },
  {
    username: 'secretary01',
    name: 'Sara Youssef',
    role: 'Secretary',
    dob: '1995-05-20',
    email: 'sara@example.com',
    salary: 8000,
    gender: 'Female',
    address: 'Giza, Egypt',
    image: 'https://i.pravatar.cc/100?img=2'
  },
  {
    username: 'manager02',
    name: 'Mohamed Tarek',
    role: 'Manager',
    dob: '1987-11-15',
    email: 'mohamed@example.com',
    salary: 15000,
    gender: 'Male',
    address: 'Alexandria, Egypt',
    image: 'https://i.pravatar.cc/100?img=3'
  }
];
}
