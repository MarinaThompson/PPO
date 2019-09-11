import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsGrammar1Page } from './topics-grammar1.page';

describe('TopicsGrammar1Page', () => {
  let component: TopicsGrammar1Page;
  let fixture: ComponentFixture<TopicsGrammar1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsGrammar1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsGrammar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
