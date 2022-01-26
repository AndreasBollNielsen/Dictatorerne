import { Dictators } from './../interfaces/dictators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  reposlist: Dictators[] = [];

  GetData() {
    return this.http.get<Dictators[]>('http://localhost:3000/');
  }

  SendData(data: any) {
    // console.log(data);
    return this.http.post<any>('http://localhost:3000/repos', data);
  }

  DeleteData(index: any) {

    return this.http.delete<any>('http://localhost:3000/del',index);
  }

  GetRepo(): Dictators[] {
    return this.reposlist;
  }
}
