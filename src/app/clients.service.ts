import { Injectable } from '@angular/core';
import { Clients } from './clients/clients';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { 

  }

  salvar(clients:Clients):Observable<Clients>{
    return this.http.post<Clients>('http://localhost:8080/api/clientes', clients)
  }

   getCliente():Observable<Clients[]>{
    return this.http.get<Clients[]>('http://localhost:8080/api/clientes');
  }
}
