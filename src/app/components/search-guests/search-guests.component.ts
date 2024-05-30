import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GetGuestsService } from '../../services/get-guests.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Guest } from '../../types/guest-response.interface';

@Component({
  selector: 'app-search-guests',
  templateUrl: './search-guests.component.html',
  styleUrl: './search-guests.component.scss'
})
export class SearchGuestsComponent implements OnInit{
  @Output() submitEvent = new EventEmitter();
  displayText = '';
  formGroup!: FormGroup;
  guest!: Guest;

  constructor(
    private getGuestsService: GetGuestsService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      searchBy: '',
      value: ''
    })
    this.getGuestsService.guest$.subscribe((guest) => {
      this.guest = guest;
    });  
  }
  onSubmit():void {
    let { searchBy, value } = this.formGroup.value;
    console.log(this.formGroup.value);
    if (searchBy === 'name') {
      this.getGuestsService.getGuestByName(value);
    }
    if (searchBy === 'document' || searchBy === '') {
      this.getGuestsService.getGuestByDocument(value);
    }
    if (searchBy === 'phone') {
      this.getGuestsService.getGuestByPhone(value);
    }
      this.submitEvent.emit();
    
  } 

}
