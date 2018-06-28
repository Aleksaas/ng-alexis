import { ShipsListComponent } from './ships-list/ships-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipsComponent } from '@app/components/ships/ships-component';

const routes: Routes = [
    {
        path: 'ships',
        component: ShipsComponent,
        children: [
            {
                path: 'list',
                component: ShipsListComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShipsRoutingModule { }
