import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientResgistrationComponent } from './client-resgistration.component';

describe('ClientResgistrationComponent', () => {
  let component: ClientResgistrationComponent;
  let fixture: ComponentFixture<ClientResgistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientResgistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientResgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
