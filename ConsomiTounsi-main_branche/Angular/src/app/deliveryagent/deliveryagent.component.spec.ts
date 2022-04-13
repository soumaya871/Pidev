import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryagentComponent } from './deliveryagent.component';

describe('DeliveryagentComponent', () => {
  let component: DeliveryagentComponent;
  let fixture: ComponentFixture<DeliveryagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
