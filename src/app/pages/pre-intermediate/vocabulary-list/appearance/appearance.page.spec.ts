import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppearancePage } from './appearance.page';

describe('AppearancePage', () => {
  let component: AppearancePage;
  let fixture: ComponentFixture<AppearancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppearancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppearancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
