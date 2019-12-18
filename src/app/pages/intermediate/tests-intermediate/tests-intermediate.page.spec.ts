import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsIntermediatePage } from './tests-intermediate.page';

describe('TestsIntermediatePage', () => {
  let component: TestsIntermediatePage;
  let fixture: ComponentFixture<TestsIntermediatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsIntermediatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsIntermediatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
