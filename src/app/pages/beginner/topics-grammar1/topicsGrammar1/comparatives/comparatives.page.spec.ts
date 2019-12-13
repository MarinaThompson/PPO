import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativesPage } from './comparatives.page';

describe('ComparativesPage', () => {
  let component: ComparativesPage;
  let fixture: ComponentFixture<ComparativesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparativesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
