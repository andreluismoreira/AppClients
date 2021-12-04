import { Injectable } from '@angular/core';
import { Clients } from './clients/clients';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor(private http: HttpClient) {}

  salvar(clients:Clients):Observable<Clients>{
    return this.http.post<Clients>(`${this.apiURL}`, clients);
  }

  atualizar(clients:Clients):Observable<any>{
    return this.http.put<Clients>(`${this.apiURL}/${clients.id}`, clients);
  }

  getCliente():Observable<Clients[]>{
    return this.http.get<Clients[]>(`${this.apiURL}`);
  }

  getClientById(id:string):Observable<Clients>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  delete(clients:Clients):Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${clients.id}`);
  }
}
