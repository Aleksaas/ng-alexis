import { NgModule } from '@angular/core';
import { BaseComponent } from '@app/components/shared/base/base.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '@app/pipes/formatdate.pipe';
import { FormatMoneyPipe } from '@app/pipes/formatmoney.pipe';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


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
        FormatMoneyPipe
    ],
    declarations: [
        FormatDatePipe,
        FormatMoneyPipe
    ],
    providers: [],
})
export class SharedModule { }
