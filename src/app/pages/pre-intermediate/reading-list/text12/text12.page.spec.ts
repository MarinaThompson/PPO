import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text12Page } from './text12.page';

describe('Text12Page', () => {
  let component: Text12Page;
  let fixture: ComponentFixture<Text12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
