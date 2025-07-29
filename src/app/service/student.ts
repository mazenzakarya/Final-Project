import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Student {
private readonly _HttpClient=inject(HttpClient)


AddStudent(data: object): Observable<any> {
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json' // تأكيد على نوع المحتوى
  });

  return this._HttpClient.post(`https://localhost:7096/api/Students`, data, { headers });
}
getAllStudent():Observable<any>
{
    const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
  });
return this._HttpClient.get(`https://localhost:7096/api/Students`,{headers})


}

deleteStudent(id: number): Observable<any> {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
  });
  return this._HttpClient.delete(`https://localhost:7096/api/Students/${id}`, { headers });
}

}
