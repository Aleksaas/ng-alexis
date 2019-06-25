import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiError } from '@app/model/common.model';
import { ErrorService } from '@app/components/shared/error-messages/error.service'

@Component({
    selector: 'error-messages',
    templateUrl: './error-messages.component.html',
    styleUrls: ['./error-messages.component.css'],
})
export class ErrorMessagesComponent implements OnInit, OnDestroy {

    subscriptionMessage: Subscription
    subscriptionClear: Subscription

    errorMessages: ApiError[]

    constructor(private errorService: ErrorService,
        private renderer: Renderer2,
        private el: ElementRef
    ) {
        this.errorMessages = new Array<ApiError>()
        this.subscriptionClear = this.errorService.clearSource$.subscribe(() => this.clearMessages())
        this.subscriptionMessage = this.errorService.messageSource$.subscribe((error: ApiError) => this.addMessage(error))
    }

    ngOnInit() { }

    clearMessages(): void {
        this.errorMessages = []
    }

    addMessage(errorMessage: ApiError): void {
        this.errorMessages.push(errorMessage);
        // this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
        window.scrollTo(0, 0)
    }

    ngOnDestroy(): void {
        this.subscriptionClear.unsubscribe()
        this.subscriptionMessage.unsubscribe()
    }
}
