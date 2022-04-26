import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenWorkoutComponent } from './women-workout.component';

describe('WomenWorkoutComponent', () => {
  let component: WomenWorkoutComponent;
  let fixture: ComponentFixture<WomenWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
