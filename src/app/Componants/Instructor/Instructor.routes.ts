import { Routes } from "@angular/router";
import { InstructorHome } from "./instructor/instructor-home";


export const instructorRoutes: Routes = [




  { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path:"home",component:InstructorHome}


 ];
