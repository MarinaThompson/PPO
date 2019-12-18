import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUpperPage } from './test-upper.page';

describe('TestUpperPage', () => {
  let component: TestUpperPage;
  let fixture: ComponentFixture<TestUpperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestUpperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUpperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
