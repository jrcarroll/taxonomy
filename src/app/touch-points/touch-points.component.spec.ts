import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchPointsComponent } from './touch-points.component';

describe('TouchPointsComponent', () => {
  let component: TouchPointsComponent;
  let fixture: ComponentFixture<TouchPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
