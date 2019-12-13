import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text29Page } from './text29.page';

describe('Text29Page', () => {
  let component: Text29Page;
  let fixture: ComponentFixture<Text29Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text29Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text29Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
