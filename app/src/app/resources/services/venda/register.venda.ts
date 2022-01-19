import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestVenda } from '../../models/venda/RequestVenda';
import { ResponseVenda } from '../../models/venda/ResponseVenda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private httpClient: HttpClient) { }

  public doVenda(requestVenda: RequestVenda): Observable<ResponseVenda>{
    return this.httpClient.post<ResponseVenda>('http://localhost:3000/Venda', requestVenda);
    console.log(ResponseVenda)
  }
}