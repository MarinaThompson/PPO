import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text1Page } from './text1.page';

describe('Text1Page', () => {
  let component: Text1Page;
  let fixture: ComponentFixture<Text1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
