import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MightPage } from './might.page';

describe('MightPage', () => {
  let component: MightPage;
  let fixture: ComponentFixture<MightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MightPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
