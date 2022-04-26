import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenWorkoutComponent } from './men-workout.component';

describe('MenWorkoutComponent', () => {
  let component: MenWorkoutComponent;
  let fixture: ComponentFixture<MenWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
