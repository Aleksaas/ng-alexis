import { Component } from '@angular/core';
import { AuthService } from '@app/services/auth/auth.service';
declare var jQuery: any;

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent {

    constructor(private authService: AuthService) {

    }

    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
    }
}
