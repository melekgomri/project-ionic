import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDeleteReservationPage } from './add-delete-reservation.page';

describe('AddDeleteReservationPage', () => {
  let component: AddDeleteReservationPage;
  let fixture: ComponentFixture<AddDeleteReservationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
