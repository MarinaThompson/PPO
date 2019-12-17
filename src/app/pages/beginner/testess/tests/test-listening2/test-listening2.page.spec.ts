import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListening2Page } from './test-listening2.page';

describe('TestListening2Page', () => {
  let component: TestListening2Page;
  let fixture: ComponentFixture<TestListening2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestListening2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListening2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
