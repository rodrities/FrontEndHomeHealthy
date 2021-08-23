import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionPageComponent } from './division-page.component';

describe('DivisionPageComponent', () => {
  let component: DivisionPageComponent;
  let fixture: ComponentFixture<DivisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
