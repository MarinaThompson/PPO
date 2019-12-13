import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsPage } from './continents.page';

describe('ContinentsPage', () => {
  let component: ContinentsPage;
  let fixture: ComponentFixture<ContinentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
