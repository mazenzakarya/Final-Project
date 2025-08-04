import { GetGroups } from './../../Componants/adminDashbord/Group/get-groups/get-groups';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class myGroupe {
    private readonly _HttpClient=inject(HttpClient)

  GetGroups(): Observable<any> {
  const user = JSON.parse(localStorage.getItem("user") || '{}');
  return this._HttpClient.get(
    `https://localhost:7096/api/Grades/teacher/${user.userId}`
  );
}
}
