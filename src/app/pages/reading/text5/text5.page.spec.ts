import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text5Page } from './text5.page';

describe('Text5Page', () => {
  let component: Text5Page;
  let fixture: ComponentFixture<Text5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
