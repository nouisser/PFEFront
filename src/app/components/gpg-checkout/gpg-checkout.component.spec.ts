import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpgCheckoutComponent } from './gpg-checkout.component';

describe('GpgCheckoutComponent', () => {
  let component: GpgCheckoutComponent;
  let fixture: ComponentFixture<GpgCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpgCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpgCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
