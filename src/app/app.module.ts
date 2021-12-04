import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsService } from './clients.service';
import { ClientsModule } from './clients/clients.module';
import { ProvidedServiceModule} from './provided-service/provided-service.module'
import { ProvidedServiceService} from'./provided-service.service'

import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ProvidedServiceModule
  ],
  providers: [
    ClientsService,
    ProvidedServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
