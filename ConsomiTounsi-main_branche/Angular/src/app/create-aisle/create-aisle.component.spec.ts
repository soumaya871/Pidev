import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAisleComponent } from './create-aisle.component';

describe('CreateAisleComponent', () => {
  let component: CreateAisleComponent;
  let fixture: ComponentFixture<CreateAisleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAisleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAisleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
