import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Personality1Page } from './personality1.page';

describe('Personality1Page', () => {
  let component: Personality1Page;
  let fixture: ComponentFixture<Personality1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Personality1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Personality1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
