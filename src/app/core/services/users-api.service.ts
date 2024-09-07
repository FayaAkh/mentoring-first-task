import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private _http: HttpClient) { 

  }

  public getUsers(){
    return this._http.get('https://jsonplaceholder.typicode.com/users'); // replace with your API endpoint

  }
}
