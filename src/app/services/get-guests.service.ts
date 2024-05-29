import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Guest } from '../types/guest-response.interface';


@Injectable({
  providedIn: 'root'
})
export class GetGuestsService {
  readonly url = 'http://localhost:8080/guest/';

  constructor(private httpClient: HttpClient) { }

  getAllGuests(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(this.url);
  }

  getGuestByPhone(phone: string): Observable<Guest> {
    return this.httpClient.get<Guest>(this.url+"filter",{params:{phone: phone}} );
  }

  getGuestByDocument(document: string): Observable<Guest> {
    return this.httpClient.get<Guest>(this.url+"filter",{params:{document: document}} );
  }
  getGuestByName(name: string): Observable<Guest> {
    return this.httpClient.get<Guest>(this.url + "filter", { params: { name: name } });
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
