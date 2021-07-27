import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWindowComponent } from './display-window.component';

describe('DisplayWindowComponent', () => {
  let component: DisplayWindowComponent;
  let fixture: ComponentFixture<DisplayWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
