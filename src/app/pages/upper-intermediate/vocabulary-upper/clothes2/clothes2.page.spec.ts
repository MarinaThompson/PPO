import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Clothes2Page } from './clothes2.page';

describe('Clothes2Page', () => {
  let component: Clothes2Page;
  let fixture: ComponentFixture<Clothes2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clothes2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clothes2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
