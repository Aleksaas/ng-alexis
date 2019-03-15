import { NgModule } from '@angular/core';
import { SharedModule } from '@app/components/shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopNavbarComponent } from './topnavbar/topnavbar.component';


@NgModule({
    imports: [
        SharedModule,
        CoreRoutingModule
    ],
    exports: [
        ShellComponent,
        FooterComponent,
        NavigationComponent,
        TopNavbarComponent
    ],
    declarations: [
        ShellComponent,
        FooterComponent,
        NavigationComponent,
        TopNavbarComponent
    ],
    providers: [],
})
export class CoreModule { }
