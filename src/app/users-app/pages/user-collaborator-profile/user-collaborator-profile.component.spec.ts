import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCollaboratorProfileComponent } from './user-collaborator-profile.component';

describe('UserCollaboratorProfileComponent', () => {
  let component: UserCollaboratorProfileComponent;
  let fixture: ComponentFixture<UserCollaboratorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCollaboratorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCollaboratorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
