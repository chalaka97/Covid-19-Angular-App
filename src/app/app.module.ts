import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalCovidComponent } from './global-covid/global-covid.component';
import { SlCovidComponent } from './sl-covid/sl-covid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CovidDataService} from "./covid-data.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    GlobalCovidComponent,
    SlCovidComponent,
    GlobalCovidComponent,
    SlCovidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    CovidDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
