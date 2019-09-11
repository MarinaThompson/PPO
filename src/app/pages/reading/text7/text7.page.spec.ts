import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text7Page } from './text7.page';

describe('Text7Page', () => {
  let component: Text7Page;
  let fixture: ComponentFixture<Text7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
