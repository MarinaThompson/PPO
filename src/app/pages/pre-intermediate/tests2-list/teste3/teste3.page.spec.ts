import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste3Page } from './teste3.page';

describe('Teste3Page', () => {
  let component: Teste3Page;
  let fixture: ComponentFixture<Teste3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
