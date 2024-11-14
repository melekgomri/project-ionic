import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangepwdPassagerPage } from './changepwd-passager.page';

describe('ChangepwdPassagerPage', () => {
  let component: ChangepwdPassagerPage;
  let fixture: ComponentFixture<ChangepwdPassagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwdPassagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
