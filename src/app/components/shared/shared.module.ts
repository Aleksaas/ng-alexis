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
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorService } from '@app/services/error.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        AngularFontAwesomeModule,
        NgxDatatableModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            disableTimeOut: true,
            closeButton: true,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        AlertModule.forRoot(),
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
        NgxDatatableModule
    ],
    declarations: [
        FormatDatePipe,
        FormatMoneyPipe,
        ValidationComponent
    ],
    providers: [ErrorService],
})
export class SharedModule { }
