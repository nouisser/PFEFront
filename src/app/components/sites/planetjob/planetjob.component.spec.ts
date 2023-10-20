import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetjobComponent } from './planetjob.component';

describe('PlanetjobComponent', () => {
  let component: PlanetjobComponent;
  let fixture: ComponentFixture<PlanetjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetjobComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
