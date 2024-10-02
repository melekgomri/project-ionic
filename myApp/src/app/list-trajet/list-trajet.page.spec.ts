import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTrajetPage } from './list-trajet.page';

describe('ListTrajetPage', () => {
  let component: ListTrajetPage;
  let fixture: ComponentFixture<ListTrajetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
