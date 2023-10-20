import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalpaymentgatewayComponent } from './globalpaymentgateway.component';

describe('GlobalpaymentgatewayComponent', () => {
  let component: GlobalpaymentgatewayComponent;
  let fixture: ComponentFixture<GlobalpaymentgatewayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalpaymentgatewayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalpaymentgatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
