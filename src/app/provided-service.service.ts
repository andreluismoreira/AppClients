import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { providedService} from './provided-service/providedService'
import { environment } from 'src/environments/environment';
import { providedServiceList } from './provided-service/provided-service-list/ProvidedServiceList';

@Injectable({
  providedIn: 'root'
})
export class ProvidedServiceService {

  apiURL:string = environment.apiURLBase + '/api/servicos-prestados'

  constructor(private http: HttpClient) { }

  save(servicoPrestado: providedService ): Observable<providedService>{
  return this.http.post<providedService>(this.apiURL, servicoPrestado);
  }

  find(nome: string , mes: number):Observable<providedServiceList[]>{
    const httpParams = new HttpParams().set("nome", nome).set("mes", mes.toString());

    const url = this.apiURL + "?" + httpParams.toString();
    return this.http.get<any>(url);
  }
}
