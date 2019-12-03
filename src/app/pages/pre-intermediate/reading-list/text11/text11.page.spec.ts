import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text11Page } from './text11.page';

describe('Text11Page', () => {
  let component: Text11Page;
  let fixture: ComponentFixture<Text11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
