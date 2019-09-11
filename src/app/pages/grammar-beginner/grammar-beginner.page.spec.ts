import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarBeginnerPage } from './grammar-beginner.page';

describe('GrammarBeginnerPage', () => {
  let component: GrammarBeginnerPage;
  let fixture: ComponentFixture<GrammarBeginnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrammarBeginnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammarBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
