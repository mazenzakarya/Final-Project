import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Group {

  private readonly _HttpClient=inject(HttpClient)

AddGroup(data:object):Observable<any>{
  return this._HttpClient.post(`https://localhost:7096/api/Groups`,data)
}

getGroup():Observable<any>{
  return this._HttpClient.get(`https://localhost:7096/api/Groups`)
}

DeletGroup(id:number):Observable<any>{
  return this._HttpClient.delete(`https://localhost:7096/api/Groups/${id}`)
}
}
