import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text39Page } from './text39.page';

describe('Text39Page', () => {
  let component: Text39Page;
  let fixture: ComponentFixture<Text39Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text39Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text39Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
