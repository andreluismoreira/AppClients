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
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
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
