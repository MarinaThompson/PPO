import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste1Page } from './teste1.page';

describe('Teste1Page', () => {
  let component: Teste1Page;
  let fixture: ComponentFixture<Teste1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
