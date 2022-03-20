import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDropDownComponent } from './season-dropdown.component';

describe('SeasonDropDownComponent', () => {
  let component: SeasonDropDownComponent;
  let fixture: ComponentFixture<SeasonDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
