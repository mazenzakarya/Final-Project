import { LoginPage } from './login-page/login-page';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { studentRoutes } from './Componants/StudentDashBord/students.routes';
import { instructorRoutes } from './Componants/Instructor/Instructor.routes';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page';
import { InstructorLayout } from './layouts/instructor-layout/instructor-layout';
import { StudentLayout } from './layouts/student-layout/student-layout';
import { AdminRoutes } from './Componants/adminDashbord/admin.routes';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';
import { UnauthorizedComponent } from './unauthorized-component/unauthorized-component';
// import { PublicAiChat } from './public-ai-chat/public-ai-chat';

export const routes: Routes = [
  { path: '', redirectTo: "landingPage", pathMatch: 'full' },
  { path: 'landingPage', component: LandingPageComponent, },
  // { path: 'publicChat', component: PublicAiChat, },
  { path: 'login', component: LoginPage },
  { path: "student", component: StudentLayout, children: studentRoutes, canActivate: [authGuard, roleGuard], data: { role: 'Student' } },
  { path: "admin", component: AdminLayout, children:AdminRoutes,canActivate:[authGuard,roleGuard],  data: { role: 'Admin' }  },

  {
    path: 'instructor', component: InstructorLayout,canActivate:[authGuard,roleGuard],  data: { role: 'Instructor' },
    children: instructorRoutes
  },
  { path: 'unauthorized', component:UnauthorizedComponent }


];
