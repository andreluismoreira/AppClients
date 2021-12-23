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
    const tokenString = localStorage.getItem('access_token')!
    const token = JSON.parse(tokenString)
    const headers = {
        'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.post<Clients>(`${this.apiURL}`, clients, {headers});
  }

  atualizar(clients:Clients):Observable<any>{
    const tokenString = localStorage.getItem('access_token')!
    const token = JSON.parse(tokenString)
    const headers = {
        'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.put<Clients>(`${this.apiURL}/${clients.id}`, clients,{headers});
  }

  getCliente():Observable<Clients[]>{
    const tokenString = localStorage.getItem('access_token')!
    const token = JSON.parse(tokenString)
    const headers = {
        'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.get<Clients[]>(this.apiURL, {headers});
  }
  getClientById(id:string):Observable<Clients>{
    const tokenString = localStorage.getItem('access_token')!
    const token = JSON.parse(tokenString)
    const headers = {
        'Authorization' : 'Bearer ' + token.access_token
    }
    return this.http.get<any>(`${this.apiURL}/${id}`, {headers});
  }

  delete(clients:Clients):Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${clients.id}`);
  }
}
