import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text8Page } from './text8.page';

describe('Text8Page', () => {
  let component: Text8Page;
  let fixture: ComponentFixture<Text8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
