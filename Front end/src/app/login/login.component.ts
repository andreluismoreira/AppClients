import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string;
  password!: string;
  cadastrando!: boolean;
  mensagemSucesso!: string;
  errors!: string[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.router.navigate(['/home'])
   console.log(`User: ${this.username}, Pass: ${this.password}`)
  }

  preparaCadastrar(){
    this.cadastrando = true;
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .salvar(usuario)
      .subscribe(response => {
        this.mensagemSucesso ="Cadastro realizado com sucesso! Efetue o login"
      }, errorResponse =>{
        this.mensagemSucesso = "";
        this.errors = errorResponse.error.errors;
      })
  }

}
