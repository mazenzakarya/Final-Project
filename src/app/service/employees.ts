import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Employees {
  private readonly _HttpClient=inject(HttpClient)

  AddEmployee(data: object): Observable<any> {
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json' // تأكيد على نوع المحتوى
  });

  return this._HttpClient.post(`https://localhost:7096/api/Users`, data, { headers });
}
getAllInstructor():Observable<any>
{
    const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
  });
return this._HttpClient.get(`https://localhost:7096/api/Users?role=Instructor`,{headers})


}

deleteInstructor(id: number): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
  });
  return this._HttpClient.delete(`https://localhost:7096/api/Users/${id}`, { headers });
}


updateUser(id: number, data: any): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
  });
  return this._HttpClient.put(`https://localhost:7096/api/Users/${id}`, data, { headers });
}


 }
