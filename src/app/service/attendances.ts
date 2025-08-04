import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Attendances {
    private http = inject(HttpClient);
  private baseUrl = 'https://localhost:7096/api';

  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Groups`);
  }

getStudentsInGroup(groupId: number): Observable<any[]> {
  return this.http.get<any[]>(`${this.baseUrl}/StudentsGroups/${groupId}/students`);
}

  markAttendance(data: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/Attendance/mark`, data);
  }
   getAttendance(groupId: number): Observable<any> {
    const url = `${this.baseUrl}/Attendance/${groupId}`;
    return this.http.get<any>(url);
  }
}
