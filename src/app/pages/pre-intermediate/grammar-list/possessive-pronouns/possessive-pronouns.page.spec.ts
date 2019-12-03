import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossessivePronounsPage } from './possessive-pronouns.page';

describe('PossessivePronounsPage', () => {
  let component: PossessivePronounsPage;
  let fixture: ComponentFixture<PossessivePronounsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossessivePronounsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessivePronounsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
