import { NgModule } from '@angular/core';
import { BaseComponent } from '@app/components/shared/base/base.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '@app/pipes/formatdate.pipe';
import { FormatMoneyPipe } from '@app/pipes/formatmoney.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BaseTable } from './base-table/base-table.component';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        AngularFontAwesomeModule
    ],
    exports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        FormatDatePipe,
        FormatMoneyPipe,
        ValidationComponent
    ],
    declarations: [
        FormatDatePipe,
        FormatMoneyPipe,
        ValidationComponent
    ],
    providers: [],
})
export class SharedModule { }
