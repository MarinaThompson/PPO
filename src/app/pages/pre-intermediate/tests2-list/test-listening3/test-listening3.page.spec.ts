import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListening3Page } from './test-listening3.page';

describe('TestListening3Page', () => {
  let component: TestListening3Page;
  let fixture: ComponentFixture<TestListening3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestListening3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListening3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
