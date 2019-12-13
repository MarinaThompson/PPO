import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarList1Page } from './grammar-list1.page';

describe('GrammarList1Page', () => {
  let component: GrammarList1Page;
  let fixture: ComponentFixture<GrammarList1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarList1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarList1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
