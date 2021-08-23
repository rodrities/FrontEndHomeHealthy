import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorRoutinesComponent } from './collaborator-routines.component';

describe('CollaboratorRoutinesComponent', () => {
  let component: CollaboratorRoutinesComponent;
  let fixture: ComponentFixture<CollaboratorRoutinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorRoutinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
