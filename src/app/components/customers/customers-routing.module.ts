import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { RouteService } from '@app/services/route.service';

const routes: Routes = [
    RouteService.withShell([{
        path: 'customers',
        component: CustomersComponent,
        children: [
            {
                path: '',
                component: CustomersListComponent,
            },
            {
                path: 'list',
                component: CustomersListComponent,
            }
        ]
    }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
