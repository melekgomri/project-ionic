import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTrajetPage } from './edit-trajet.page';

describe('EditTrajetPage', () => {
  let component: EditTrajetPage;
  let fixture: ComponentFixture<EditTrajetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrajetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
