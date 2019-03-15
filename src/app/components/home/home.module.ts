import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/components/shared/shared.module';
import { HomeComponent } from './home.component';


@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    exports: [
        HomeComponent,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [],
})
export class HomeModule { }
