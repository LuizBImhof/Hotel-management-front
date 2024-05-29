import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { GuestsListComponent } from './components/guests-list/guests-list.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDivider } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    GuestsListComponent,
    ReservationsListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDivider
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
