import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { HomeComponent } from './home/home.component';
import { CenzorComponent } from './cenzor/cenzor.component';
import { PhoneBookComponent } from './phone-book/phone-book.component';

import { SearchingPipe } from './searching.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CenzorComponent,
    HomeComponent,
    PhoneBookComponent,
    SearchingPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
