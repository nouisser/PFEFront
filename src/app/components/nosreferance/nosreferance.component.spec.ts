import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosreferanceComponent } from './nosreferance.component';

describe('NosreferanceComponent', () => {
  let component: NosreferanceComponent;
  let fixture: ComponentFixture<NosreferanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosreferanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosreferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
