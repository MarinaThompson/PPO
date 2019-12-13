import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text40Page } from './text40.page';

describe('Text40Page', () => {
  let component: Text40Page;
  let fixture: ComponentFixture<Text40Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text40Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text40Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
