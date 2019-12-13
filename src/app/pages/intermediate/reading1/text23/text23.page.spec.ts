import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text23Page } from './text23.page';

describe('Text23Page', () => {
  let component: Text23Page;
  let fixture: ComponentFixture<Text23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text23Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
