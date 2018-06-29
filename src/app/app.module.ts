import { EventService } from '@app/services/event.service';
import { ShipService } from '@app/services/ship.service';
import { BaseService } from './services/base.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from '@app/services/api.service';
import { ShipModule } from '@app/components/ships/ships.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/components/shared/shared.module';

const routes: Routes = [

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        ShipModule,
    ],
    providers: [
        ApiService,
        BaseService,
        ShipService,
        EventService
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
