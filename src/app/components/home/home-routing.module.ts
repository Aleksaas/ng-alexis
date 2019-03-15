import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { Route } from '@app/services/route.service';

const routes: Routes = [
    Route.withShell([
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
