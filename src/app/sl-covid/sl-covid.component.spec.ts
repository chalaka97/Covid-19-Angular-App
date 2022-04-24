import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlCovidComponent } from './sl-covid.component';

describe('SlCovidComponent', () => {
  let component: SlCovidComponent;
  let fixture: ComponentFixture<SlCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
