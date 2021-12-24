import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  usuario!:string;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
    this.usuario = this.service.getusuarioAutenticado();
  }

}
