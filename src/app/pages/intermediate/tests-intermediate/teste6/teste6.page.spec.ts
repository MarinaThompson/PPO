import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste6Page } from './teste6.page';

describe('Teste6Page', () => {
  let component: Teste6Page;
  let fixture: ComponentFixture<Teste6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
