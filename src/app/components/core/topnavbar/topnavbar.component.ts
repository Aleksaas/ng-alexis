import { Component } from '@angular/core';
declare var jQuery: any;

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopNavbarComponent {

    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
    }
}
