import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '@app/pipes/shared/formatdate.pipe';
import { FormatMoneyPipe } from '@app/pipes/shared/formatmoney.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ValidationComponent } from './validation/validation.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { ErrorService } from './error-messages/error.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        AngularFontAwesomeModule,
        NgxDatatableModule
    ],
    exports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        FormatDatePipe,
        FormatMoneyPipe,
        ValidationComponent,
        AngularFontAwesomeModule,
        NgxDatatableModule,
        ErrorMessagesComponent
    ],
    declarations: [
        FormatDatePipe,
        FormatMoneyPipe,
        ValidationComponent,
        ErrorMessagesComponent
    ],
    providers: [ErrorService],
})
export class SharedModule { }
