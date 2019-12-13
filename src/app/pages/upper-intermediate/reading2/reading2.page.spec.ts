import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reading2Page } from './reading2.page';

describe('Reading2Page', () => {
  let component: Reading2Page;
  let fixture: ComponentFixture<Reading2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reading2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reading2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
