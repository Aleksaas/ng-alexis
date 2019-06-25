import { HomeModule } from '@app/components/home/home.module';
import { EventService } from '@app/services/event.service';
import { BaseService } from '@app/services/base.service';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ApiService } from '@app/services/api.service';
import { ShipModule } from '@app/components/ships/ships.module';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@app/components/shared/shared.module';
import { ShipApiService } from '@app/services/api/ships.api.service';
import { ShipService } from '@app/components/ships/ship.service';
import { CoreModule } from '@app/components/core/core.module';
import { TvShowsModule } from '@app/components/tv-shows/tv-shows.module';
import { OrderModule } from 'ngx-order-pipe';
import { TvShowsApiService } from '@app/services/api/shows.api.service';
import { CustomersModule } from '@app/components/customers/customers.module';
import { CustomersApiService } from '@app/services/api/customers.api.service';
import { CustomersService } from '@app/components/customers/customers.service';
import { JwtService } from '@app/services/auth/jwt.service';
import { AuthService } from '@app/services/auth/auth.service';


const routes: Routes = [

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { enableTracing: true }),
        CoreModule,
        HomeModule,
        ShipModule,
        TvShowsModule,
        OrderModule,
        CustomersModule
    ],
    providers: [
        ApiService,
        BaseService,
        ShipService,
        EventService,
        ShipApiService,
        TvShowsApiService,
        CustomersApiService,
        CustomersService,
        JwtService,
        AuthService
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
