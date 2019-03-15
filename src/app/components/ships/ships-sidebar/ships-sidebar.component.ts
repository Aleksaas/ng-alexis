import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipService } from '@app/components/ships/ship.service';

@Component({
    selector: 'ships-sidebar',
    templateUrl: './ships-sidebar.component.html',
    styleUrls: ['./ships-sidebar.component.scss'],
    animations: [
        trigger('slideInOut', [
            transition(':enter', [style({ height: '0' }), animate('500ms ease-in', style({ height: '*' }))]),
            transition(':leave', [animate('200ms ease-in', style({ height: '0' }))])
        ])
    ]
})
export class ShipsSidebarComponent implements OnInit {

    constructor(private router: Router,
        private route: ActivatedRoute,
        private shipService: ShipService) {

    }

    ngOnInit() {
        this.shipService.loadSideNavigationShips();
    }
}
