import { Component, OnInit } from '@angular/core';
import { TvShowsApiService } from '@app/services/api/shows.api.service';
import { TvShowsDataService } from '../tv-shows-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from '@app/model/shows.model';

@Component({
    selector: 'tv-shows-form',
    templateUrl: './tv-shows-form.component.html',
    styleUrls: ['./tv-shows-form.component.css']
})
export class TvShowsFormComponent implements OnInit {

    constructor(
        private tvShowsDataService: TvShowsDataService,
        private tvShowsApiService: TvShowsApiService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    tvShow: Show;

    ngOnInit() {
        this.route.params.subscribe(async params => {
            const showId = params["showId"];
            this.tvShow = await this.tvShowsApiService.get(showId);
        })
    }

    updateTvShow() {
        this.tvShowsDataService.updateShow(this.tvShow);
        this.router.navigate(['/tv-shows/list']);
    }

}
