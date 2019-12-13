import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text30Page } from './text30.page';

describe('Text30Page', () => {
  let component: Text30Page;
  let fixture: ComponentFixture<Text30Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text30Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text30Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
