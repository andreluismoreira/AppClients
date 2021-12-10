import { Component, OnInit } from '@angular/core';
import { ProvidedServiceService } from 'src/app/provided-service.service';
import { providedServiceList } from './ProvidedServiceList';

@Component({
  selector: 'app-provided-service-list',
  templateUrl: './provided-service-list.component.html',
  styleUrls: ['./provided-service-list.component.css']
})
export class ProvidedServiceListComponent implements OnInit {

  nome!: string;
  mes!:number;
  meses: number[];
  list!: providedServiceList[];
  message!: string;

  constructor(private service: ProvidedServiceService) {
    this.meses= [1,2,3,4,5,6,7,8,9,10,11,12];
   }

  ngOnInit(): void {}

  consultar(){
    this.service
      .find(this.nome, this.mes)
      .subscribe(response => {
        this.list = response
        if(this.list.length <= 0) {
          this.message = "Nenhum registro encontrado";
        }else{
          this.message = "";
        }
      });
  }

}
