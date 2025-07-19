import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { studentRoutes } from './Componants/StudentDashBord/students.routes';
import { instructorRoutes } from './Componants/Instructor/Instructor.routes';
import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { InstructorLayout } from './layouts/instructor-layout/instructor-layout';
import { StudentLayout } from './layouts/student-layout/student-layout';
import { AdminRoutes } from './Componants/adminDashbord/admin.routes';

export const routes: Routes = [
  { path: '', redirectTo: "landingPage", pathMatch: 'full' },
  { path: 'landingPage', component: LandingPage },
  { path: "student", component: StudentLayout, children: studentRoutes },
  { path: "admin", component: AdminLayout, children:AdminRoutes  },

  {
    path: 'instructor', component: InstructorLayout,
    children: instructorRoutes
  }


];
