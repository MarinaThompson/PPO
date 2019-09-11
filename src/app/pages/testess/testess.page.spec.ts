import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestessPage } from './testess.page';

describe('TestessPage', () => {
  let component: TestessPage;
  let fixture: ComponentFixture<TestessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
