import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { ProvidedServiceFormComponent } from "./provided-service-form/provided-service-form.component";
import { ProvidedServiceListComponent } from "./provided-service-list/provided-service-list.component";

const routes: Routes = [
    {
    path:'provided-service',
    component: LayoutComponent,
    children:[
        {
            path:'form',
            component: ProvidedServiceFormComponent
        },
        {
            path:'list',
            component: ProvidedServiceListComponent
        },
        {
            path:'',
            redirectTo: '/provided-service/list',
            pathMatch: 'full'
        }
    ]
    }
];

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports :[RouterModule]
})
export class ProvidedServiceRoutingModule {

    
}