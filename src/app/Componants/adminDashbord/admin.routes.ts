import { Routes } from "@angular/router";
import { Home } from "./home/home";
import { AddCourse } from "./course/ِAddcourse/Addcourse";
import { Getcourses } from "./course/getcourses/getcourses";
import { AddGroup } from "./Group/Addgroup/group";
import { GetGroups } from "./Group/get-groups/get-groups";
import { AddSubject } from "./Subject/add-subject/add-subject";
import { GetSubject } from "./Subject/get-subject/get-subject";
import { AddStudent } from "./student/add-student/add-student";
import { GetStudent } from "./student/get-student/get-student";
import { Userdetials } from "./student/userdetials/userdetials";
import { Addemployee } from "./employee/addemployee/addemployee";
import { Getemployee } from "./employee/getemployee/getemployee";
import { Addencome } from "./account/addincome/addencome";
import { Addexpense } from "./account/addexpense/addexpense";
import { AccountStatement } from "./account/account-statement/account-statement";
import { StudentAttend } from "./Attendance/student-attend/student-attend";
import { EmployeeAttend } from "./Attendance/employee-attend/employee-attend";
import { GetemployeeRep } from "./Attendance/getemployee-rep/getemployee-rep";
import { GetstudentRep } from "./Attendance/getstudent-rep/getstudent-rep";
import { AddhomeWork } from "./homework/addhome-work/addhome-work";
import { Gethomework } from "./homework/gethomework/gethomework";
import { AddStdGroup } from "./Group/add-std-group/add-std-group";
import { AddGrade } from "./homework/add-grade/add-grade";


export const AdminRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component:Home },
  { path: 'Addcourse', component:AddCourse },
  { path: 'getcourses', component:Getcourses },
  { path: 'AddStdGroup', component:AddStdGroup },
  { path: 'Addgroup', component:AddGroup },
  { path: 'getgroup', component:GetGroups },
  { path: 'Addsubject', component:AddSubject },
  { path: 'getsubject', component:GetSubject },
  { path: 'Addstudent', component:AddStudent },
  { path: 'getstudent', component:GetStudent },
  { path: 'userdetails', component:Userdetials },
  { path: 'Addemployee', component:Addemployee },
  { path: 'getemployee', component:Getemployee },
  { path: 'Addincome', component:Addencome },
  { path: 'Addexpense', component:Addexpense },
  { path: 'AccountStatement', component:AccountStatement },
  { path: 'student', component: StudentAttend},
  { path: 'employee', component: EmployeeAttend},
  { path: 'student-report', component:GetstudentRep },
  { path: 'employee-report', component: GetemployeeRep},
  { path: 'Addhomework', component: AddhomeWork},
  { path: 'AddGrade', component: AddGrade},
  { path: 'gethomework', component: Gethomework},
];
