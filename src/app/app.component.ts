import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Guest } from './types/guest-response.interface';
import { GetGuestsService } from './services/get-guests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hotel-management';
  showGuest = new BehaviorSubject(false);



  onSubmit(){
    console.log('submit');
    this.showGuest.next(true);
    
  }
}
