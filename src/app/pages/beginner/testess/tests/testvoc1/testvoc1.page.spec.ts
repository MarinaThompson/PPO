import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testvoc1Page } from './testvoc1.page';

describe('Testvoc1Page', () => {
  let component: Testvoc1Page;
  let fixture: ComponentFixture<Testvoc1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testvoc1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testvoc1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
