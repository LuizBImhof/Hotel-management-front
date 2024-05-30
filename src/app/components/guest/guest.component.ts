import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Guest } from '../../types/guest-response.interface';
import { GetGuestsService } from '../../services/get-guests.service';



@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss'
})
export class GuestComponent implements OnInit{
  @Output() submitEvent = new EventEmitter<Guest>();

  guest!: Guest;
  displayedColumns: string[] = ['name', 'document', 'phone'];
  dataSource!: Guest[];

  constructor(private getGuestsService: GetGuestsService) { }

  ngOnInit(): void {
    this.getGuestsService.guest$.subscribe((guest) => {
      this.guest = guest;
      console.log(this.guest);
      console.log(guest); 
      this.dataSource = [this.guest];
      this.submitEvent.emit();
    });
    
  }
  

  
}
