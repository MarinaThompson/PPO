import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarUpperPage } from './grammar-upper.page';

describe('GrammarUpperPage', () => {
  let component: GrammarUpperPage;
  let fixture: ComponentFixture<GrammarUpperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarUpperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarUpperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
