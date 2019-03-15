import { Route as ngRoute, Routes } from '@angular/router';
import { ShellComponent } from '@app/components/core/shell/shell.component';

/**
 * Provides helper methods to create routes.
 */
export class Route {

    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return {Route} The new route using shell as the base.
     */
    static withShell(routes: Routes): ngRoute {
        return {
            path: '',
            component: ShellComponent,
            children: routes,
        };
    }

}
