import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text37Page } from './text37.page';

describe('Text37Page', () => {
  let component: Text37Page;
  let fixture: ComponentFixture<Text37Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text37Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text37Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
