import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text22Page } from './text22.page';

describe('Text22Page', () => {
  let component: Text22Page;
  let fixture: ComponentFixture<Text22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text22Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
