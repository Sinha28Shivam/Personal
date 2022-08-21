import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>("https://mocki.io/v1/08cc055d-576a-4608-94eb-7cae2b74911f")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
