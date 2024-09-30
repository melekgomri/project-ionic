import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajetPage } from './trajet.page';

describe('TrajetPage', () => {
  let component: TrajetPage;
  let fixture: ComponentFixture<TrajetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
