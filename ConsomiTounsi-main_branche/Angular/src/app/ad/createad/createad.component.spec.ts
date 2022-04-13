import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadComponent } from './createad.component';

describe('CreateadComponent', () => {
  let component: CreateadComponent;
  let fixture: ComponentFixture<CreateadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
