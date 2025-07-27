import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Subject {

  private _http = inject(HttpClient);

  getAllSubjects(): Observable<any> {
    return this._http.get('https://localhost:7096/api/CourseSubjects');
  }
  AddSubject(subject: object): Observable<any> {
    return this._http.post('https://localhost:7096/api/CourseSubjects', subject);
  }
deleteSubject(subjectId: number): Observable<any> {
    return this._http.delete(`https://localhost:7096/api/CourseSubjects/${subjectId}`);
  }
}
