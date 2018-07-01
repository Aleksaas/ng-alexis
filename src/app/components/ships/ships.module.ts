import { ShipsComponent } from '@app/components/ships/ships-component';
import { ShipsListComponent } from '@app/components/ships/ships-list/ships-list.component';
import { NgModule } from '@angular/core';
import { ShipsRoutingModule } from '@app/components/ships/ships-routing.module';
import { SharedModule } from '@app/components/shared/shared.module';
import { ShipsSidebarComponent } from '@app/components/ships/ships-sidebar/ships-sidebar.component';



@NgModule({
    imports: [
        SharedModule,
        ShipsRoutingModule
    ],
    exports: [
        ShipsListComponent,
        ShipsComponent,
        ShipsSidebarComponent
    ],
    declarations: [
        ShipsListComponent,
        ShipsComponent,
        ShipsSidebarComponent
    ],
    providers: [],
})
export class ShipModule { }
