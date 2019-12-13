import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeGoingPage } from './be-going.page';

describe('BeGoingPage', () => {
  let component: BeGoingPage;
  let fixture: ComponentFixture<BeGoingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeGoingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeGoingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
