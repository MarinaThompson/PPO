import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text34Page } from './text34.page';

describe('Text34Page', () => {
  let component: Text34Page;
  let fixture: ComponentFixture<Text34Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text34Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text34Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
