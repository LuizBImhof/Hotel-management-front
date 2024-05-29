import { Component } from '@angular/core';
import { Reservation } from '../../types/reservation-response.interface';
import { GetReservationsService } from '../../services/get-reservations.service';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrl: './reservations-list.component.scss'
})
export class ReservationsListComponent {
  reservations: Reservation[] = [];

  constructor(private getReservationsService: GetReservationsService) {}

  ngOnInit() {
    this.getReservationsService.getAllReservations().subscribe((response) => {
      this.reservations = response;
    });
    this.getReservationsService.checkInReservation(13).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error.error);
    });
  }

}
