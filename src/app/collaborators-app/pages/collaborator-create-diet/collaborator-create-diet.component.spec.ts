import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorCreateDietComponent } from './collaborator-create-diet.component';

describe('CollaboratorCreateDietComponent', () => {
  let component: CollaboratorCreateDietComponent;
  let fixture: ComponentFixture<CollaboratorCreateDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorCreateDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorCreateDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
