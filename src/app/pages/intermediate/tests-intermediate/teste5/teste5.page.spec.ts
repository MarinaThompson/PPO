import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste5Page } from './teste5.page';

describe('Teste5Page', () => {
  let component: Teste5Page;
  let fixture: ComponentFixture<Teste5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
