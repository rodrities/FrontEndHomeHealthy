import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorDietsComponent } from './collaborator-diets.component';

describe('CollaboratorDietsComponent', () => {
  let component: CollaboratorDietsComponent;
  let fixture: ComponentFixture<CollaboratorDietsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorDietsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorDietsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
