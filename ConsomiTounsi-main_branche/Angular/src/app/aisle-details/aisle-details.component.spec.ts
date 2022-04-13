import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AisleDetailsComponent } from './aisle-details.component';

describe('AisleDetailsComponent', () => {
  let component: AisleDetailsComponent;
  let fixture: ComponentFixture<AisleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AisleDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AisleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
