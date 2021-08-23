import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorCreateRoutineComponent } from './collaborator-create-routine.component';

describe('CollaboratorCreateRoutineComponent', () => {
  let component: CollaboratorCreateRoutineComponent;
  let fixture: ComponentFixture<CollaboratorCreateRoutineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorCreateRoutineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorCreateRoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
