import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text26Page } from './text26.page';

describe('Text26Page', () => {
  let component: Text26Page;
  let fixture: ComponentFixture<Text26Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text26Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
