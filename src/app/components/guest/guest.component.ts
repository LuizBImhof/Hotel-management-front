import { Component } from '@angular/core';
import { Guest } from '../../types/guest-response.interface';

const ELEMENT_DATA: Guest[] = [
  { id: 1, name: 'John Doe',  document: '123456', phone: '5654654', reservations: [] },
];

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss'
})
export class GuestComponent {
  guest: Guest[] = [];
  displayedColumns: string[] = ['name', 'document', 'phone'];
  dataSource = ELEMENT_DATA;
}
