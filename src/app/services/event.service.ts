import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Events } from '@app/enums/events.enum';

@Injectable()
export class EventService {

    private eventSource = new Subject<any>();

    eventSource$ = this.eventSource.asObservable();

    sendEvent(eventType: Events, data: any = null) {
        this.eventSource.next(
            {
                eventType: eventType,
                data: data
            }
        );
    }

    subscribe(eventType: Events, callback) {
        this.eventSource$.subscribe(
            event => {
                if (event.eventType === eventType) {
                    callback(event);
                }
            }
        );
    }
}
