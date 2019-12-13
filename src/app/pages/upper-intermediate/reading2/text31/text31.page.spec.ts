import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text31Page } from './text31.page';

describe('Text31Page', () => {
  let component: Text31Page;
  let fixture: ComponentFixture<Text31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text31Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
