import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilisteurListPage } from './utilisteur-list.page';

describe('UtilisteurListPage', () => {
  let component: UtilisteurListPage;
  let fixture: ComponentFixture<UtilisteurListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisteurListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
