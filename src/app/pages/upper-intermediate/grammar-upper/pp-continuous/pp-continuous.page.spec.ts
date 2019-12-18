import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpContinuousPage } from './pp-continuous.page';

describe('PpContinuousPage', () => {
  let component: PpContinuousPage;
  let fixture: ComponentFixture<PpContinuousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpContinuousPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpContinuousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
