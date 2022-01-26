import { Dictators } from './../interfaces/dictators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http:HttpClient) {}

  GetData()
  {
    return this.http.get<any>('http://localhost:3000/repos.json');
  }
}
