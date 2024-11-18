import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCovoitureursPage } from './list-covoitureurs.page';

describe('ListCovoitureursPage', () => {
  let component: ListCovoitureursPage;
  let fixture: ComponentFixture<ListCovoitureursPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCovoitureursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
