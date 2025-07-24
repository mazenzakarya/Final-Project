import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Authentcation {

  private readonly _httpClient = inject(HttpClient);

  login(data:object):Observable<any>{
    return this._httpClient.post('https://localhost:7096/api/Auth/login', data);

  }

}
