import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text35Page } from './text35.page';

describe('Text35Page', () => {
  let component: Text35Page;
  let fixture: ComponentFixture<Text35Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text35Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text35Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
