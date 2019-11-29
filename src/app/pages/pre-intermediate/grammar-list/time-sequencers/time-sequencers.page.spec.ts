import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSequencersPage } from './time-sequencers.page';

describe('TimeSequencersPage', () => {
  let component: TimeSequencersPage;
  let fixture: ComponentFixture<TimeSequencersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSequencersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSequencersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
