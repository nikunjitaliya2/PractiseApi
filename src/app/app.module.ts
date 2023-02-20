import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AdminRoutingModule} from "./admin/admin-routing.module";
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
