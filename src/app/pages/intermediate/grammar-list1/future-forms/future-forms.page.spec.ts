import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureFormsPage } from './future-forms.page';

describe('FutureFormsPage', () => {
  let component: FutureFormsPage;
  let fixture: ComponentFixture<FutureFormsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureFormsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
