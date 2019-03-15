import { HomeModule } from './components/home/home.module';
import { EventService } from '@app/services/event.service';
import { BaseService } from './services/base.service';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from '@app/services/api.service';
import { ShipModule } from '@app/components/ships/ships.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/components/shared/shared.module';
import { ShipApiService } from '@app/services/api/ships.api.service';
import { ShipService } from '@app/components/ships/ship.service';
import { CoreModule } from './components/core/core.module';


const routes: Routes = [

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        CoreModule,
        HomeModule,
        ShipModule,
    ],
    providers: [
        ApiService,
        BaseService,
        ShipService,
        EventService,
        ShipApiService
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
