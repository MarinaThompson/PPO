import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerundPage } from './gerund.page';

describe('GerundPage', () => {
  let component: GerundPage;
  let fixture: ComponentFixture<GerundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
