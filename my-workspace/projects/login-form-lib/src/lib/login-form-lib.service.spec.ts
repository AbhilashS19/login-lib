import { TestBed } from '@angular/core/testing';

import { LoginFormLibService } from './login-form-lib.service';

describe('LoginFormLibService', () => {
  let service: LoginFormLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
