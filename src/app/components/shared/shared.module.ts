import { NgModule } from '@angular/core';
import { BaseComponent } from '@app/components/shared/base/base.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
    ],
    declarations: [

    ],
    providers: [],
})
export class SharedModule { }
