import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluralPage } from './plural.page';

describe('PluralPage', () => {
  let component: PluralPage;
  let fixture: ComponentFixture<PluralPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluralPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
