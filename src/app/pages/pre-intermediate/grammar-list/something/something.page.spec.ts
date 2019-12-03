import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingPage } from './something.page';

describe('SomethingPage', () => {
  let component: SomethingPage;
  let fixture: ComponentFixture<SomethingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomethingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
