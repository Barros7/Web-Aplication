import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestRegister } from '../../models/register/RequestRegister';
import { ResponseRegister } from '../../models/register/ResponseRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  public doRegister(requestRegister: RequestRegister): Observable<ResponseRegister>{
    return this.httpClient.post<ResponseRegister>('http://localhost:3000/auth/register', requestRegister);
    console.log(ResponseRegister)
  }
}