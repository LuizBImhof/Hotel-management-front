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
import { SearchGuestsComponent } from './components/search-guests/search-guests.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GuestComponent } from './components/guest/guest.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GuestsListComponent,
    ReservationsListComponent,
    HeaderComponent,
    SearchGuestsComponent,
    GuestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDivider,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButton,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
