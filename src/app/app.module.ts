import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConvertToStringPipe } from './pipes/convert-to-string.pipe';
import { NumberSpacingPipe } from './pipes/number-spacing.pipe';
import { UnknownValuePipe } from './pipes/unknown-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnknownValuePipe,
    NumberSpacingPipe,
    ConvertToStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
