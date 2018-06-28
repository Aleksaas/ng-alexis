import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injector } from '@angular/core';
import { PageableSearchRequest } from '@app/model/search.model';
import { EventService } from '@app/services/event.service';

/**
 * This is base service for all API calls. No API call should be done outside this service.
 */
export class BaseService extends ApiService {

    public route: string;

    protected eventService: EventService;

    constructor(protected injector: Injector) {

        super(injector);

        this.eventService = injector.get(EventService);
    }

    search(searchRequest?: PageableSearchRequest): Observable<any[]> {

        if (!searchRequest) {
            searchRequest = new PageableSearchRequest();
        }

        return this.post(`/${this.route}/search`, searchRequest);
    }

    get(id: any): Observable<any[]> {
        return this.get(`/${this.route}/${id}`);
    }

    update(id: number, payload: any): Observable<any[]> {
        return this.put(`/${this.route}/${id}`, payload);
    }

    create(payload: any): Observable<any[]> {
        return this.post(`/${this.route}`, payload);
    }

    remove(id: number): Observable<any[]> {
        return this.delete(`/${this.route}/${id}`);
    }
}

