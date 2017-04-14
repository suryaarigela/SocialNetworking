import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import {appRouting} from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
       FormsModule,
    ReactiveFormsModule,
    appRouting
    
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }