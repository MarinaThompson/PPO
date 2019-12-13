import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPronounsPage } from './object-pronouns.page';

describe('ObjectPronounsPage', () => {
  let component: ObjectPronounsPage;
  let fixture: ComponentFixture<ObjectPronounsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectPronounsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPronounsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
