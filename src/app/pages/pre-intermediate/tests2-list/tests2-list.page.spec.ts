import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tests2ListPage } from './tests2-list.page';

describe('Tests2ListPage', () => {
  let component: Tests2ListPage;
  let fixture: ComponentFixture<Tests2ListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tests2ListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tests2ListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
