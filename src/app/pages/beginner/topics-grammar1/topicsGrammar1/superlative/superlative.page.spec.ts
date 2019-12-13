import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperlativePage } from './superlative.page';

describe('SuperlativePage', () => {
  let component: SuperlativePage;
  let fixture: ComponentFixture<SuperlativePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperlativePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperlativePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
