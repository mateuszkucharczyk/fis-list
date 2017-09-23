import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation'
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CommissionService} from './commission.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    HttpModule
  ],
  providers: [CommissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
