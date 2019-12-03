import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text20Page } from './text20.page';

describe('Text20Page', () => {
  let component: Text20Page;
  let fixture: ComponentFixture<Text20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text20Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
