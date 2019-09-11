import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text4Page } from './text4.page';

describe('Text4Page', () => {
  let component: Text4Page;
  let fixture: ComponentFixture<Text4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
