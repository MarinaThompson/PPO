import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditional2Page } from './conditional2.page';

describe('Conditional2Page', () => {
  let component: Conditional2Page;
  let fixture: ComponentFixture<Conditional2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Conditional2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Conditional2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
