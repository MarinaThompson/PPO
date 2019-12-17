import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste4Page } from './teste4.page';

describe('Teste4Page', () => {
  let component: Teste4Page;
  let fixture: ComponentFixture<Teste4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teste4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
