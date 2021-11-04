import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/clients.service';
import { Clients } from '../clients';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Clients[] = [];

  constructor(private service:ClientsService, private router:Router) { }

  ngOnInit(): void {
    this.service
    .getCliente()
    .subscribe(response =>{
      this.clients = response;
    })
  }

  novoClient(){
    this.router.navigate(['/clients-form'])
  }
}
