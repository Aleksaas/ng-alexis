import { NgModule } from '@angular/core';

import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

@NgModule({
    declarations: [
        CustomersComponent,
        CustomersListComponent
    ],
    exports: [
        CustomersComponent,
        CustomersListComponent
    ],
    imports: [
        SharedModule,
        CustomersRoutingModule
    ]
})
export class CustomersModule { }
