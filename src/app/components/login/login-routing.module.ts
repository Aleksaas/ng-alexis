import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@app/services/route.service';
import { LoginComponent } from '@app/components/login/login.component';

const routes: Routes = [
    Route.withGuestShell([{
        path: 'login',
        component: LoginComponent,
    }])
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
