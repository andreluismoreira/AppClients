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
  clientSelecionado!:Clients;
  mensagemSucesso!: string;
  mensagemErro!:string;

  constructor(private service:ClientsService, private router:Router) { }

  ngOnInit(): void {
    this.service
    .getCliente()
    .subscribe(response =>{
      this.clients = response;
    })
  }

  novoClient(){
    this.router.navigate(['/clients/form'])
  }

  preparaDelecao(clients:Clients){
    this.clientSelecionado = clients;
  }

  deletarClient(){
   this.service.delete(this.clientSelecionado)
   .subscribe(
      response => {
        this.mensagemSucesso = 'Cliente removido com sucesso'
        this.ngOnInit();
      },
      erro => this.mensagemErro = 'Ocorreu um erro ao remover o cliente'
   )
    
  }
}
