import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturePerfectPage } from './future-perfect.page';

describe('FuturePerfectPage', () => {
  let component: FuturePerfectPage;
  let fixture: ComponentFixture<FuturePerfectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturePerfectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturePerfectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
