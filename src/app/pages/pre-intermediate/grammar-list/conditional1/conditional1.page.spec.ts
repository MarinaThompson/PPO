import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditional1Page } from './conditional1.page';

describe('Conditional1Page', () => {
  let component: Conditional1Page;
  let fixture: ComponentFixture<Conditional1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conditional1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conditional1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
