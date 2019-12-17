import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyIntermediatePage } from './vocabulary-intermediate.page';

describe('VocabularyIntermediatePage', () => {
  let component: VocabularyIntermediatePage;
  let fixture: ComponentFixture<VocabularyIntermediatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabularyIntermediatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyIntermediatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
