import { Group } from './../../../../service/group';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-groups',
  imports: [CommonModule,RouterLink],
  templateUrl: './get-groups.html',
  styleUrl: './get-groups.css'
})
export class GetGroups implements OnInit {
 private readonly _Group=inject(Group)
 private readonly _ToastrService=inject(ToastrService)
  AllGroup: any[] = [];
  isLoading = false;


 getGroups(){
  this._Group.getGroup().subscribe({
    next:(res)=>{
      console.log(res);
      this.AllGroup=res

    },
    error:(err)=>{
      console.log(err);

    }
  })
 }
deleteGroup(id: number) {
  this.isLoading = true;

  this._Group.DeletGroup(id).subscribe({
    next: (res: any) => {
         console.log('✅ Group Deleted:', res);
      setTimeout(() => {
        this._ToastrService.success('Group deleted successfully.', 'Success');
        this.getGroups();
        this.isLoading = false;
      }, 1000);
    },
    error: (err: any) => {
      setTimeout(() => {
          console.error('❌ Error Occurred:', err);
        this._ToastrService.error('An error occurred while deleting the Group.', 'Error');
        this.isLoading = false;
      }, 1000);
    }
  });
}
 ngOnInit(): void {
this.getGroups()
 }
}
