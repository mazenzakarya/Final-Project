import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-home-work',
  imports: [CommonModule],
  templateUrl: './get-home-work.html',
  styleUrl: './get-home-work.css'
})
export class GetHomeWork  {

// isLoading=false;
//   gatAllhomeWork:any[]=[];
//   private readonly _HomeWork=inject(HomeWork)
//   private readonly _ToastrService=inject(ToastrService)

//   getHomeWorke(){
//     this._HomeWork.getHomeWork().subscribe({
//       next:(res)=>{
//         console.log(res);
//         this.gatAllhomeWork=res

//       }
//     })
//   }
//  deleteHomeWork(id:number){
//   this._HomeWork.deleteHomeWork(id).subscribe()
//  }
//   ngOnInit(): void {
//     this.getHomeWorke();
//   }

}
