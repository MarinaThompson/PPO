import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text21Page } from './text21.page';

describe('Text21Page', () => {
  let component: Text21Page;
  let fixture: ComponentFixture<Text21Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text21Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
