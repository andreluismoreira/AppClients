import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';
import { ClientsService } from 'src/app/clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client!: Clients
  success: Boolean = false;
  errors!: string[];
  id!: string;

  constructor(private service:ClientsService,
              private router:Router,
              private activatedRoute: ActivatedRoute) { 
    this.client = new Clients();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")!
    this.service.getClientById(this.id)
      .subscribe(
        response => this.client = response,
        errorResponse => this.client = new Clients()
      )
    
  }

  onSubmit(){

    if(this.id){
      this.service.atualizar(this.client)
      .subscribe(response =>{
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        this.errors = ['Erro ao atualizar Cliente']
      })

    } else{
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

  voltar(){
    this.router.navigate(['/clients-list']);
  }

}
