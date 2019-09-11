import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverbsPage } from './adverbs.page';

describe('AdverbsPage', () => {
  let component: AdverbsPage;
  let fixture: ComponentFixture<AdverbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdverbsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
