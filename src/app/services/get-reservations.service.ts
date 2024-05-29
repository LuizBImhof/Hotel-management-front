import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation } from '../types/reservation-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetReservationsService {
  readonly url = 'http://localhost:8080/reservation/';

  constructor(private httpClient: HttpClient) { }

  getAllReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.url);
  }

  getReservationById(id: number) {
    return this.httpClient.get(this.url + id);
  }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(this.url, reservation);
  }

  checkInReservation(id: number): Observable<any> {
    return this.httpClient.post<Reservation>(this.url + 'check-in/' + id, null);
  }

  checkOutReservation(id: number): Observable<Reservation> {
    return this.httpClient.post<Reservation>(this.url + 'check-out/' + id, null);
  }

}
