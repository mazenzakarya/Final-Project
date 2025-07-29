import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HomeWork } from '../../../../service/home-work';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gethomework',
  imports: [CommonModule, RouterLink],
  templateUrl: './gethomework.html',
  styleUrl: './gethomework.css'
})
export class Gethomework implements OnInit {
   isLoading=false;
  gatAllhomeWork:any[]=[];
  private readonly _HomeWork=inject(HomeWork)
  private readonly _ToastrService=inject(ToastrService)

  getHomeWorke(){
    this._HomeWork.getHomeWork().subscribe({
      next:(res)=>{
        console.log(res);
        this.gatAllhomeWork=res

      }
    })
  }
deleteHomeWork(id: number) {
  this.isLoading = true;
  this._HomeWork.deleteHomeWork(id).subscribe({
    next: () => {
      setTimeout(() => {
        this.isLoading = false;
        this._ToastrService.success('Deleted successfully');
        this.getHomeWorke();
      }, 1000); // 1 second delay
    },
    error: () => {
      this.isLoading = false;
      this._ToastrService.error('Failed to delete homework');
    }
  });
}

  ngOnInit(): void {
    this.getHomeWorke();
  }

}
