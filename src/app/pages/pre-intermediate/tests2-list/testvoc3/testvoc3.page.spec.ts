import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testvoc3Page } from './testvoc3.page';

describe('Testvoc3Page', () => {
  let component: Testvoc3Page;
  let fixture: ComponentFixture<Testvoc3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testvoc3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testvoc3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
