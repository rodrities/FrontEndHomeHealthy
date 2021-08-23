import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorSessionsComponent } from './collaborator-sessions.component';

describe('CollaboratorSessionsComponent', () => {
  let component: CollaboratorSessionsComponent;
  let fixture: ComponentFixture<CollaboratorSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
