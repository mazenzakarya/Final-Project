import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fees {
  private baseUrl = 'https://localhost:7096/api';

private readonly http=inject(HttpClient)

  // Get all students
  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Students`);
  }

  // Get group and course for a student
  getStudentGroupDetails(studentId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/StudentsGroups/student/${studentId}/group-class-details`);
  }

  // Post a fee
  addFee(feeData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Fee`, feeData);
  }
addExpense(feeData: any): Observable<any> {
  const token = localStorage.getItem('token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });

  return this.http.post(`${this.baseUrl}/Fee/add-expense`, feeData, { headers });
}


getAllreport():Observable<any> {
  return this.http.get(`https://localhost:7096/api/Fee/summary`);
}

getStudentFees(): Observable<any> {
  const user =JSON.parse(localStorage.getItem('user') || '{}');
  return this.http.get(`https://localhost:7096/api/Fee/student/${user.userId}`);
}

}
