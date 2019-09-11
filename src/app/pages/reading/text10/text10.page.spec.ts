import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text10Page } from './text10.page';

describe('Text10Page', () => {
  let component: Text10Page;
  let fixture: ComponentFixture<Text10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
