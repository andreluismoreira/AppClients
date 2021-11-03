import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client!: Clients

  constructor() { 
    this.client = new Clients();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.client)
  }
}
