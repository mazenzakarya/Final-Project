import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class attendances {

   private readonly _HttpClient=inject(HttpClient)

  getAttendenc(): Observable<any> {
  const user = JSON.parse(localStorage.getItem("user") || '{}');
  return this._HttpClient.get(
    `https://localhost:7096/api/Attendance/student/${user.userId}`
  );
}
}
