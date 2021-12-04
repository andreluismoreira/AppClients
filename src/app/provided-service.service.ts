import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { providedService} from './provided-service/providedService'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvidedServiceService {

  apiURL:string = environment.apiURLBase + '/api/servicos-prestados'

  constructor(private http: HttpClient) { }

  save(servicoPrestado: providedService ): Observable<providedService>{
  return this.http.post<providedService>(this.apiURL, servicoPrestado);
  }
}
