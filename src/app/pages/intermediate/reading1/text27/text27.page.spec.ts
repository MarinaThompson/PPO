import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text27Page } from './text27.page';

describe('Text27Page', () => {
  let component: Text27Page;
  let fixture: ComponentFixture<Text27Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text27Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
