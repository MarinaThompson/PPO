import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text15Page } from './text15.page';

describe('Text15Page', () => {
  let component: Text15Page;
  let fixture: ComponentFixture<Text15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text15Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
