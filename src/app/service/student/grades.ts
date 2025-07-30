import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class grades {
    private readonly _HttpClient=inject(HttpClient)

  getGrades(): Observable<any> {
  const user = JSON.parse(localStorage.getItem("user") || '{}');
  return this._HttpClient.get(
    `https://localhost:7096/api/Grades/student/${user.userId}`
  );
}
}
