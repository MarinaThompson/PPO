import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListening4Page } from './test-listening4.page';

describe('TestListening4Page', () => {
  let component: TestListening4Page;
  let fixture: ComponentFixture<TestListening4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestListening4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListening4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
