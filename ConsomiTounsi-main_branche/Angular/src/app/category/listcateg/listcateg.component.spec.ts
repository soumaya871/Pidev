import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcategComponent } from './listcateg.component';

describe('ListcategComponent', () => {
  let component: ListcategComponent;
  let fixture: ComponentFixture<ListcategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcategComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
