import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiquepageComponent } from './boutiquepage.component';

describe('BoutiquepageComponent', () => {
  let component: BoutiquepageComponent;
  let fixture: ComponentFixture<BoutiquepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutiquepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiquepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
