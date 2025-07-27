import { AddCourse } from './../Componants/adminDashbord/course/ِAddcourse/Addcourse';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Course {
  private _http = inject(HttpClient);

  getAllCourses():Observable<any>
  {
    return this._http.get('https://localhost:7096/api/Courses');
  }


  AddCourse(course: object): Observable<any> {
    return this._http.post('https://localhost:7096/api/Courses', course);
  }

  deleteCourse(id: number): Observable<any> {
    return this._http.delete(`https://localhost:7096/api/Courses/${id}`);
  }
}
