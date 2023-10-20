import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceprofessionnelComponent } from './espaceprofessionnel.component';

describe('EspaceprofessionnelComponent', () => {
  let component: EspaceprofessionnelComponent;
  let fixture: ComponentFixture<EspaceprofessionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceprofessionnelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceprofessionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
