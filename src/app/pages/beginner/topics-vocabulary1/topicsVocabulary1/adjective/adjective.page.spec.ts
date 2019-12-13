import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjectivePage } from './adjective.page';

describe('AdjectivePage', () => {
  let component: AdjectivePage;
  let fixture: ComponentFixture<AdjectivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjectivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjectivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
