import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text16Page } from './text16.page';

describe('Text16Page', () => {
  let component: Text16Page;
  let fixture: ComponentFixture<Text16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text16Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
