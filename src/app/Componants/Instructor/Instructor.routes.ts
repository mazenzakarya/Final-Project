import { Routes } from "@angular/router";
import { InstructorHome } from "./instructor/instructor-home";
import { AddHomeWork } from "./add-home-work/add-home-work";
import { GetHomeWork } from "./get-home-work/get-home-work";
import { StudentAttendance } from "./student-attendance/student-attendance";


export const instructorRoutes: Routes = [




  { path: '', redirectTo: 'homework', pathMatch: 'full' },
   {path:"homework",component:AddHomeWork},
   {path:"getHomework",component:GetHomeWork},
   {path:"Attendance",component:StudentAttendance}


 ];
