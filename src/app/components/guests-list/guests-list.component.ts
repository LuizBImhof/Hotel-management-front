import { Component } from '@angular/core';
import { GetGuestsService } from '../../services/get-guests.service';
import { Guest } from '../../types/guest-response.interface';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrl: './guests-list.component.scss'
})
export class GuestsListComponent {
  guests: Guest[] = [];

  constructor(private getGuestsService: GetGuestsService) {}

  ngOnInit() {
    this.getGuestsService.getAllGuests().subscribe((response) => {
      this.guests = response;
    });

  }
}
