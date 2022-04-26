import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenDietComponent } from './men-diet.component';

describe('MenDietComponent', () => {
  let component: MenDietComponent;
  let fixture: ComponentFixture<MenDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
