import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCovidComponent } from './global-covid.component';

describe('GlobalCovidComponent', () => {
  let component: GlobalCovidComponent;
  let fixture: ComponentFixture<GlobalCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
