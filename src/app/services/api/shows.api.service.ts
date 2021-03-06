import { Injectable } from '@angular/core';
import { ApiService } from '@app/services/api.service';
import { TvShow, Show } from '@app/model/shows.model';

@Injectable()
export class TvShowsApiService {

    constructor(
        private apiService: ApiService,
    ) { }

    async search(searchTerm: string): Promise<TvShow[]> {

        const response = await this.apiService.get(`search/shows?q=${searchTerm}`).toPromise();

        return response;
    }

    async get(showId: number): Promise<Show> {

        // Search by thetvdb because we dont have search by id in api
        const response = await this.apiService.get(`lookup/shows?thetvdb=${showId}`).toPromise();

        return response;
    }
}
