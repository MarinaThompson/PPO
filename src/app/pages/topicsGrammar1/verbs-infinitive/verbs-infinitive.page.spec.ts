import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsInfinitivePage } from './verbs-infinitive.page';

describe('VerbsInfinitivePage', () => {
  let component: VerbsInfinitivePage;
  let fixture: ComponentFixture<VerbsInfinitivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbsInfinitivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbsInfinitivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
