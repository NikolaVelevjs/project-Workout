import { TestBed } from '@angular/core/testing';

import { AuthenicationGuard } from './authenication.guard';

describe('AuthenicationGuard', () => {
  let guard: AuthenicationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenicationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
