import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerResgistrationComponent } from './seller-resgistration.component';

describe('SellerResgistrationComponent', () => {
  let component: SellerResgistrationComponent;
  let fixture: ComponentFixture<SellerResgistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerResgistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerResgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
