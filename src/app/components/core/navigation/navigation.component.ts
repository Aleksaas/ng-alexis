import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth/auth.service';

declare var jQuery: any;

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements AfterViewInit {

    constructor(private router: Router,
                private authService: AuthService) { }

    ngAfterViewInit() {
        jQuery('#side-menu').metisMenu();

        if (jQuery("body").hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimscroll({
                height: '100%'
            })
        }
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }


}
