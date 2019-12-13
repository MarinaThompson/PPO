import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reading1Page } from './reading1.page';

describe('Reading1Page', () => {
  let component: Reading1Page;
  let fixture: ComponentFixture<Reading1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reading1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reading1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
