import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text14Page } from './text14.page';

describe('Text14Page', () => {
  let component: Text14Page;
  let fixture: ComponentFixture<Text14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text14Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
