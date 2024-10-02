import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeDeleteReservationPage } from './liste-delete-reservation.page';

describe('ListeDeleteReservationPage', () => {
  let component: ListeDeleteReservationPage;
  let fixture: ComponentFixture<ListeDeleteReservationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDeleteReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
