import { Routes } from "@angular/router";
import { AddHomeWork } from "./add-home-work/add-home-work";
import { GetHomeWork } from "./get-home-work/get-home-work";
import { StudentAttendance } from "./student-attendance/student-attendance";
import { MyGroupe } from "./my-groupe/my-groupe";
import { AddGrade } from "./add-grade/add-grade";


export const instructorRoutes: Routes = [


  { path: '', redirectTo: 'myGroup', pathMatch: 'full' },
   {path:"myGroup",component:MyGroupe},
   {path:"homework",component:AddHomeWork},
   {path:"grade",component:AddGrade},
   {path:"getHomework",component:GetHomeWork},
   {path:"Attendance",component:StudentAttendance}


 ];
