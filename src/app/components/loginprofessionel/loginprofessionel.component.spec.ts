import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginprofessionelComponent } from './loginprofessionel.component';

describe('LoginprofessionelComponent', () => {
  let component: LoginprofessionelComponent;
  let fixture: ComponentFixture<LoginprofessionelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginprofessionelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginprofessionelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
