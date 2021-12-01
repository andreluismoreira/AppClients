import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Clients } from 'src/app/clients/clients';

@Component({
  selector: 'app-provided-service-form',
  templateUrl: './provided-service-form.component.html',
  styleUrls: ['./provided-service-form.component.css']
})
export class ProvidedServiceFormComponent implements OnInit {

  clients: Clients[] = []

  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.clientService
      .getCliente()
      .subscribe(response => this.clients = response);
  }

  onSubmit(){
    console.log('submit');
  }
}
