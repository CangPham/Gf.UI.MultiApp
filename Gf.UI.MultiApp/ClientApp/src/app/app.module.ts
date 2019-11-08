import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CheckoutSharedModule } from "../../projects/Checkout/src/app/app.module";
//import { DetectionSharedModule } from "../../projects/Detection/src/app/app.module";
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      CheckoutSharedModule.forRoot(),
     // DetectionSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
