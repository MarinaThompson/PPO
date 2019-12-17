import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food1Page } from './food1.page';

describe('Food1Page', () => {
  let component: Food1Page;
  let fixture: ComponentFixture<Food1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
