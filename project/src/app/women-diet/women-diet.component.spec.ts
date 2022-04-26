import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenDietComponent } from './women-diet.component';

describe('WomenDietComponent', () => {
  let component: WomenDietComponent;
  let fixture: ComponentFixture<WomenDietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenDietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
