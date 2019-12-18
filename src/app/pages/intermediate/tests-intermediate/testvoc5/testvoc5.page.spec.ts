import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testvoc5Page } from './testvoc5.page';

describe('Testvoc5Page', () => {
  let component: Testvoc5Page;
  let fixture: ComponentFixture<Testvoc5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testvoc5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testvoc5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
