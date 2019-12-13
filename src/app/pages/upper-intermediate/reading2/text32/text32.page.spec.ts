import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text32Page } from './text32.page';

describe('Text32Page', () => {
  let component: Text32Page;
  let fixture: ComponentFixture<Text32Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text32Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text32Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
