import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountablePage } from './countable.page';

describe('CountablePage', () => {
  let component: CountablePage;
  let fixture: ComponentFixture<CountablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
