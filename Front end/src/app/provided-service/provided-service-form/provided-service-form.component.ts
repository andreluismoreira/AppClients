import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Clients } from 'src/app/clients/clients';
import { providedService } from '../providedService';
import { ProvidedServiceService} from '../../provided-service.service'

@Component({
  selector: 'app-provided-service-form',
  templateUrl: './provided-service-form.component.html',
  styleUrls: ['./provided-service-form.component.css']
})
export class ProvidedServiceFormComponent implements OnInit {

  success: boolean = false;
  errors!: String[];
  clients: Clients[] = []
  servico!: providedService; 

  constructor(private clientService: ClientsService,
              private service: ProvidedServiceService) {
    this.servico = new providedService()
   }

  ngOnInit(): void {
    this.clientService
      .getCliente()
      .subscribe(response => this.clients = response);
  }

  onSubmit(){
    this.service
      .save(this.servico)
      .subscribe( response =>{
        this.success = true;
        this.errors = [];
        this.servico = new providedService();
      }, errorResponse =>{
        this.success = false;
        this.errors = errorResponse.error.errors; 
      })
  }
}
