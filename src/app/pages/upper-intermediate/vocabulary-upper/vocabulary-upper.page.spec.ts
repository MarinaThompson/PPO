import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyUpperPage } from './vocabulary-upper.page';

describe('VocabularyUpperPage', () => {
  let component: VocabularyUpperPage;
  let fixture: ComponentFixture<VocabularyUpperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyUpperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyUpperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
