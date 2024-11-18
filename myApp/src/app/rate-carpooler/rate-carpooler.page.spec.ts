import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RateCarpoolerPage } from './rate-carpooler.page';

describe('RateCarpoolerPage', () => {
  let component: RateCarpoolerPage;
  let fixture: ComponentFixture<RateCarpoolerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RateCarpoolerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
