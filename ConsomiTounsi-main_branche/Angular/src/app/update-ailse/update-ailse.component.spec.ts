import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAilseComponent } from './update-ailse.component';

describe('UpdateAilseComponent', () => {
  let component: UpdateAilseComponent;
  let fixture: ComponentFixture<UpdateAilseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAilseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAilseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
