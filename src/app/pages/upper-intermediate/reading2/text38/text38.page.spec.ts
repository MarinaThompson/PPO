import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text38Page } from './text38.page';

describe('Text38Page', () => {
  let component: Text38Page;
  let fixture: ComponentFixture<Text38Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text38Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text38Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
