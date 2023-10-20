import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesiteComponent } from './updatesite.component';

describe('UpdatesiteComponent', () => {
  let component: UpdatesiteComponent;
  let fixture: ComponentFixture<UpdatesiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
