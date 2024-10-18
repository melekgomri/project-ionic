import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTrajetCovoitureurPage } from './list-trajet-covoitureur.page';

describe('ListTrajetCovoitureurPage', () => {
  let component: ListTrajetCovoitureurPage;
  let fixture: ComponentFixture<ListTrajetCovoitureurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrajetCovoitureurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
