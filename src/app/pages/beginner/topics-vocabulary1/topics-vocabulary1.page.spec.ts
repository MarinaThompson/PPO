import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsVocabulary1Page } from './topics-vocabulary1.page';

describe('TopicsVocabulary1Page', () => {
  let component: TopicsVocabulary1Page;
  let fixture: ComponentFixture<TopicsVocabulary1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicsVocabulary1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicsVocabulary1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
