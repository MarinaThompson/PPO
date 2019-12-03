import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperIntermediatePage } from './upper-intermediate.page';

describe('UpperIntermediatePage', () => {
  let component: UpperIntermediatePage;
  let fixture: ComponentFixture<UpperIntermediatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperIntermediatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperIntermediatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
