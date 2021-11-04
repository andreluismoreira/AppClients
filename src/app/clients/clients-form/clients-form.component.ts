import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client!: Clients
  success: Boolean = false;
  errors!: string[];

  constructor(private service:ClientsService) { 
    this.client = new Clients();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
    .salvar(this.client)
    .subscribe(response => {
      this.success = true;
      this.errors = [];
      this.client = response;
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
      this.success = false;
    })

  }
}
