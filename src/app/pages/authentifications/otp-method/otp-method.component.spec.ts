import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpMethodComponent } from './otp-method.component';

describe('OtpMethodComponent', () => {
  let component: OtpMethodComponent;
  let fixture: ComponentFixture<OtpMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
