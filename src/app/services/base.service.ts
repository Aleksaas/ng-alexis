import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { PageableSearchRequest } from '@app/model/search.model';
import { EventService } from '@app/services/event.service';

/**
 * This is base service for all API calls. No API call should be done outside this service.
 */
@Injectable()
export class BaseService extends ApiService {

    protected route: string;

    protected eventService: EventService;

    constructor(protected injector: Injector) {

        super(injector);

        this.eventService = injector.get(EventService);
    }

    search(searchRequest?: PageableSearchRequest): Promise<any> {

        if (!searchRequest) {
            searchRequest = new PageableSearchRequest();
        }

        return this.post(`${this.route}/search`, searchRequest);
    }

    get(id: any): Promise<any[]> {
        return this.get(`${this.route}/${id}`);
    }

    update(id: number, payload: any): Promise<any[]> {
        return this.put(`${this.route}/${id}`, payload);
    }

    create(payload: any): Promise<any[]> {
        return this.post(`${this.route}`, payload);
    }

    remove(id: number): Promise<any[]> {
        return this.delete(`${this.route}/${id}`);
    }
}

