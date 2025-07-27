import { Subject } from './../../../../service/subject';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-subject',
  imports: [CommonModule,RouterLink],
  templateUrl: './get-subject.html',
  styleUrl: './get-subject.css'
})
export class GetSubject implements OnInit {
  private _Subject = inject(Subject);
  private toastr = inject(ToastrService);
  subjects: any[] = [];
  ngOnInit() {
    this.getAllSubjects();
  }
  getAllSubjects() {
    this._Subject.getAllSubjects().subscribe({
      next: (data) => {
        this.subjects = data;
        console.log('Subjects fetched successfully:', this.subjects);

      },
      error: (err) => {
        console.error('Error fetching subjects:', err);
      }
    });
  }

  deleteSubject(id: number) {
  if (confirm('Are you sure you want to delete this subject?')) {
    this._Subject.deleteSubject(id).subscribe({
      next: () => {
        const index = this.subjects.findIndex(s => s.courseSubjectId === id);
        if (index !== -1) {
          this.subjects.splice(index, 1);
        }
        this.toastr.success('Subject deleted successfully');
      },
      error: (err) => {
        console.error('Error deleting subject:', err);
        this.toastr.error('Failed to delete subject');
      }
    });
  }
}


}
