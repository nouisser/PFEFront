import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GppayComponent } from './gppay.component';

describe('GppayComponent', () => {
  let component: GppayComponent;
  let fixture: ComponentFixture<GppayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GppayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GppayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
