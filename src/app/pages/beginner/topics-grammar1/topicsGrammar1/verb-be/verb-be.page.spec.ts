import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbBePage } from './verb-be.page';

describe('VerbBePage', () => {
  let component: VerbBePage;
  let fixture: ComponentFixture<VerbBePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbBePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbBePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
