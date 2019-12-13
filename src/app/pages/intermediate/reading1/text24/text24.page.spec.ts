import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text24Page } from './text24.page';

describe('Text24Page', () => {
  let component: Text24Page;
  let fixture: ComponentFixture<Text24Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text24Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
