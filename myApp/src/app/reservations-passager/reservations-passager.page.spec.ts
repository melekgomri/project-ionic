import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationsPassagerPage } from './reservations-passager.page';

describe('ReservationsPassagerPage', () => {
  let component: ReservationsPassagerPage;
  let fixture: ComponentFixture<ReservationsPassagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationsPassagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
