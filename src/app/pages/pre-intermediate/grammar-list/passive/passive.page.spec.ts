import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassivePage } from './passive.page';

describe('PassivePage', () => {
  let component: PassivePage;
  let fixture: ComponentFixture<PassivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
