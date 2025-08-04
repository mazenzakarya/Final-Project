import { Component, inject, OnInit } from '@angular/core';
import { myGroupe } from '../../../service/Instructor/my-groupe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-groupe',
  imports: [CommonModule],
  templateUrl: './my-groupe.html',
  styleUrl: './my-groupe.css'
})
export class MyGroupe implements OnInit {
userName: string = '';


groups: any[] = [];
 private readonly myGroupService=inject(myGroupe)
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    this.userName = user.name || 'Unknown User';

    this.myGroupService.GetGroups().subscribe({
      next: (res) => this.groups = res,
      error: (err) => console.error('Error fetching groups', err)
    });
  }
}
