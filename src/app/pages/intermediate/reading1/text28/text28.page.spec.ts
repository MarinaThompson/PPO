import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text28Page } from './text28.page';

describe('Text28Page', () => {
  let component: Text28Page;
  let fixture: ComponentFixture<Text28Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text28Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
