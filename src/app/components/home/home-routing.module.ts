import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { RouteService } from '@app/services/route.service';

const routes: Routes = [
    RouteService.withShell([
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: '',
            component: HomeComponent
        },
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
