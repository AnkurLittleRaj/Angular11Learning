import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import {AddMessageReducer} from './storeConcept/reducer'
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({message:AddMessageReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
