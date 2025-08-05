import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Counter {



    private _http = inject(HttpClient);

    getAllStudent():Observable<any>
    {
      return this._http.get('https://localhost:7096/api/UsersCount/student/count');
    }

     getAllInstructor():Observable<any>
    {
      return this._http.get('https://localhost:7096/api/UsersCount/instructors/count');
    }

}
