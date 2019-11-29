import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarListPage } from './grammar-list.page';

describe('GrammarListPage', () => {
  let component: GrammarListPage;
  let fixture: ComponentFixture<GrammarListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
