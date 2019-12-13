import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSimplePage } from './past-simple.page';

describe('PastSimplePage', () => {
  let component: PastSimplePage;
  let fixture: ComponentFixture<PastSimplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastSimplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSimplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
