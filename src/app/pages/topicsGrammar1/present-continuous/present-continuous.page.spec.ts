import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentContinuousPage } from './present-continuous.page';

describe('PresentContinuousPage', () => {
  let component: PresentContinuousPage;
  let fixture: ComponentFixture<PresentContinuousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentContinuousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentContinuousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
