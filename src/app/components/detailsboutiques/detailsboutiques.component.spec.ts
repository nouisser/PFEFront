import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsboutiquesComponent } from './detailsboutiques.component';

describe('DetailsboutiquesComponent', () => {
  let component: DetailsboutiquesComponent;
  let fixture: ComponentFixture<DetailsboutiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsboutiquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsboutiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
