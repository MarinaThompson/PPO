import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordOrderPage } from './word-order.page';

describe('WordOrderPage', () => {
  let component: WordOrderPage;
  let fixture: ComponentFixture<WordOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
