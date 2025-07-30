import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeWork {
  private readonly _HttpClient=inject(HttpClient)

  addHomeWork(data:object):Observable<any>{
    return this._HttpClient.post(`https://localhost:7096/api/CourseSubjectElements`,data)
  }

   getHomeWork():Observable<any>{
    return this._HttpClient.get(`https://localhost:7096/api/CourseSubjectElements`)
  }
   deleteHomeWork(id:number):Observable<any>{
    return this._HttpClient.delete(`https://localhost:7096/api/CourseSubjectElements/${id}`)
  }


  addGrade(data:object):Observable<any>{
    return this._HttpClient.post(`https://localhost:7096/api/Grades`,data)
  }

}
