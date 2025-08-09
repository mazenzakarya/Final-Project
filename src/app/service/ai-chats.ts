import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AiChats {

  private readonly _http = inject(HttpClient)

  askQuestion(question: object): Observable<any> {
  const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,

      'Content-Type': 'application/json',
    });
    return this._http.post(`https://localhost:7096/api/Ai/chat`, question, { headers });

  }

    publicAskQuestion(question: object): Observable<any> {
 
    return this._http.post(`https://localhost:7096/api/Ai/publicChat`, question);
  }

}
