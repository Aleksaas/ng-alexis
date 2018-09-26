import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Injector, Injectable } from '@angular/core';
import { EventService } from '@app/services/event.service';
import { ApiResponse } from '@app/model/common.model';
import { SearchRequest, SearchResult } from '@app/model/search.model';

/**
 * This was done for experimenting purposes. Not used currently.
 */
@Injectable()
export class BaseService extends ApiService {

    protected route: string;

    protected eventService: EventService;

    constructor(protected injector: Injector) {

        super(injector);

        this.eventService = injector.get(EventService);
    }

    get<T>(id: any): Promise<ApiResponse> {
        return this.get(`${this.route}/${id}`);
    }

    update<T>(id: number, payload: any): Promise<ApiResponse> {
        return this.put(`${this.route}/${id}`, payload);
    }

    create<T>(payload: any): Promise<ApiResponse> {
        return this.post(`${this.route}`, payload);
    }

    remove<T>(id: number): Promise<ApiResponse> {
        return this.delete(`${this.route}/${id}`);
    }
}

