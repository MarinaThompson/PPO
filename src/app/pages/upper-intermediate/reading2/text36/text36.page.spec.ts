import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text36Page } from './text36.page';

describe('Text36Page', () => {
  let component: Text36Page;
  let fixture: ComponentFixture<Text36Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text36Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text36Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
