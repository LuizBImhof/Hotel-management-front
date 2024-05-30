import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Guest } from '../types/guest-response.interface';


@Injectable({
  providedIn: 'root'
})
export class GetGuestsService {
  readonly url = 'http://localhost:8080/guest/';

  private guestSubject = new BehaviorSubject<Guest>({} as Guest);
  guest$ = this.guestSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getAllGuests(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(this.url);
  }

  getGuestByPhone(phone: string) {
    this.httpClient.get<Guest>(this.url + "filter", { params: { phone: phone } }).subscribe( data => {
      this.guestSubject.next(data);
    });
  }

  getGuestByDocument(document: string) {
    this.httpClient.get<Guest>(this.url + "filter", { params: { document: document } }).subscribe( data => {
      this.guestSubject.next(data);
    });
  }
  getGuestByName(name: string) {
    this.httpClient.get<Guest>(this.url + "filter", { params: { name: name } }).subscribe( data => {
      this.guestSubject.next(data);
    });
  }
  getGuestById(id: number): Observable<Guest> {
    return this.httpClient.get<Guest>(this.url+id);
  }

  deleteGuestById(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.url + id);
  }

  createGuest(guest: Guest): Observable<Guest> {
    return this.httpClient.post<Guest>(this.url, guest);
  }
}
