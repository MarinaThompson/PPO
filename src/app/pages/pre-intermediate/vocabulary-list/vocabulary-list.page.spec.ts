import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyListPage } from './vocabulary-list.page';

describe('VocabularyListPage', () => {
  let component: VocabularyListPage;
  let fixture: ComponentFixture<VocabularyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
