import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantifiersPage } from './quantifiers.page';

describe('QuantifiersPage', () => {
  let component: QuantifiersPage;
  let fixture: ComponentFixture<QuantifiersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantifiersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantifiersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
