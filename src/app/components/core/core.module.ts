import { NgModule } from '@angular/core';
import { SharedModule } from '@app/components/shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopNavbarComponent } from './topnavbar/topnavbar.component';
import { GuestShellComponent } from './guest-shell/guest-shell.component';


@NgModule({
    imports: [
        SharedModule,
        CoreRoutingModule
    ],
    exports: [
        ShellComponent,
        FooterComponent,
        NavigationComponent,
        TopNavbarComponent,
        GuestShellComponent
    ],
    declarations: [
        ShellComponent,
        FooterComponent,
        NavigationComponent,
        TopNavbarComponent,
        GuestShellComponent
    ],
    providers: [],
})
export class CoreModule { }
