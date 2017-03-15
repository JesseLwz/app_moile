import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppApplicationComponent } from './appstore/app-application.component';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent, AppApplicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,AppRoutingModule,TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
