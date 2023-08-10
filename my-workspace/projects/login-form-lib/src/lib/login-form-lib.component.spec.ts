import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormLibComponent } from './login-form-lib.component';

describe('LoginFormLibComponent', () => {
  let component: LoginFormLibComponent;
  let fixture: ComponentFixture<LoginFormLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormLibComponent]
    });
    fixture = TestBed.createComponent(LoginFormLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
