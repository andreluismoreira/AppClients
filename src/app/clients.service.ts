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
    return this.http.post<Clients>('http://localhost:8080/api/clientes', clients);
  }

  atualizar(clients:Clients):Observable<any>{
    return this.http.put<Clients>(`http://localhost:8080/api/clientes/${clients.id}`, clients);
  }

  getCliente():Observable<Clients[]>{
    return this.http.get<Clients[]>('http://localhost:8080/api/clientes');
  }

  getClientById(id:string):Observable<Clients>{
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }


}
