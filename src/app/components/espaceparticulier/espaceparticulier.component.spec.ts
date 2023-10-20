import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceparticulierComponent } from './espaceparticulier.component';

describe('EspaceparticulierComponent', () => {
  let component: EspaceparticulierComponent;
  let fixture: ComponentFixture<EspaceparticulierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceparticulierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceparticulierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
