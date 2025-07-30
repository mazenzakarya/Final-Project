import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetGroup {
  private readonly _HttpClient=inject(HttpClient)

  getGroup(): Observable<any> {
  const user = JSON.parse(localStorage.getItem("user") || '{}');
  return this._HttpClient.get(
    `https://localhost:7096/api/StudentsGroups/student/${user.userId}/group-details`
  );
}
}
