import { Component, OnInit } from '@angular/core';
import { GetGuestsService } from '../../services/get-guests.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Guest } from '../../types/guest-response.interface';

@Component({
  selector: 'app-search-guests',
  templateUrl: './search-guests.component.html',
  styleUrl: './search-guests.component.scss'
})
export class SearchGuestsComponent implements OnInit{
  displayText = '';
  formGroup!: FormGroup;
  guest: Guest[] = [];

  constructor(
    private getGuestsService: GetGuestsService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      searchBy: '',
      value: ''
    })
  
  }
  onSubmit():void {
    let { searchBy, value } = this.formGroup.value;
    console.log(this.formGroup.value);
    if (searchBy === 'name') {
      this.getGuestsService.getGuestByName(value).subscribe((response) => {
        if ( response === null ) {
          console.log("no guest found");
        } else {
          this.guest = [];
          this.guest.push(response);
        }
      });
    }
    if (searchBy === 'document'){
      this.getGuestsService.getGuestByDocument(value).subscribe((response) => {
        if ( response === null ) {
          console.log("no guest found");
        } else {
          this.guest = [];
          this.guest.push(response);
        }
      });
    }
    if (searchBy === 'phone'){
      this.getGuestsService.getGuestByPhone(value).subscribe((response) => {
        if ( response === null ) {
          console.log("no guest found");
        } else {
          this.guest = [];
          this.guest.push(response);
        }
      });
    }
    console.log(this.guest);
  } 

}
