import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text9Page } from './text9.page';

describe('Text9Page', () => {
  let component: Text9Page;
  let fixture: ComponentFixture<Text9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
