import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text25Page } from './text25.page';

describe('Text25Page', () => {
  let component: Text25Page;
  let fixture: ComponentFixture<Text25Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text25Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
