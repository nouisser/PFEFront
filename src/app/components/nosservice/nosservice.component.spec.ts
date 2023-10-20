import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosserviceComponent } from './nosservice.component';

describe('NosserviceComponent', () => {
  let component: NosserviceComponent;
  let fixture: ComponentFixture<NosserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
