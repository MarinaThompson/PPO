import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassiveThePage } from './passive-the.page';

describe('PassiveThePage', () => {
  let component: PassiveThePage;
  let fixture: ComponentFixture<PassiveThePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassiveThePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassiveThePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
