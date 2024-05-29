import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGuestsComponent } from './search-guests.component';

describe('SearchGuestsComponent', () => {
  let component: SearchGuestsComponent;
  let fixture: ComponentFixture<SearchGuestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchGuestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
