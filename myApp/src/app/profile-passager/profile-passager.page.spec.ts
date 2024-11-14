import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePassagerPage } from './profile-passager.page';

describe('ProfilePassagerPage', () => {
  let component: ProfilePassagerPage;
  let fixture: ComponentFixture<ProfilePassagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePassagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
