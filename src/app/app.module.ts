import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainModule } from "./huynd/main.module";

@NgModule({
  declarations: [],
  imports: [
    MainModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
