import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text13Page } from './text13.page';

describe('Text13Page', () => {
  let component: Text13Page;
  let fixture: ComponentFixture<Text13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
