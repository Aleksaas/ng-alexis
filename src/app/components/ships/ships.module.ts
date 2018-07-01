import { ShipsComponent } from '@app/components/ships/ships-component';
import { ShipsListComponent } from '@app/components/ships/ships-list/ships-list.component';
import { NgModule } from '@angular/core';
import { ShipsRoutingModule } from '@app/components/ships/ships-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/components/shared/shared.module';



@NgModule({
    imports: [
        SharedModule,
        ShipsRoutingModule
    ],
    exports: [
        ShipsListComponent,
        ShipsComponent
    ],
    declarations: [
        ShipsListComponent,
        ShipsComponent
    ],
    providers: [],
})
export class ShipModule { }
