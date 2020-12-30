import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDg7r-UzkMu_l5h3vxpsYPvqUipHhShDl4'
    })
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
