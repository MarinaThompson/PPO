import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestListeningPage } from './test-listening.page';

describe('TestListeningPage', () => {
  let component: TestListeningPage;
  let fixture: ComponentFixture<TestListeningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestListeningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestListeningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
