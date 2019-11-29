import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeClausesPage } from './relative-clauses.page';

describe('RelativeClausesPage', () => {
  let component: RelativeClausesPage;
  let fixture: ComponentFixture<RelativeClausesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeClausesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeClausesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
