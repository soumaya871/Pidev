import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AisleListComponent } from './aisle-list.component';

describe('AisleListComponent', () => {
  let component: AisleListComponent;
  let fixture: ComponentFixture<AisleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AisleListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AisleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
