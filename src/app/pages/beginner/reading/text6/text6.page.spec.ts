import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text6Page } from './text6.page';

describe('Text6Page', () => {
  let component: Text6Page;
  let fixture: ComponentFixture<Text6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
