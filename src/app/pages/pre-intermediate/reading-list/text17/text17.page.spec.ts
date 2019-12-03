import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text17Page } from './text17.page';

describe('Text17Page', () => {
  let component: Text17Page;
  let fixture: ComponentFixture<Text17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text17Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
