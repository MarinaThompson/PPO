import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNivelamentoPage } from './teste-nivelamento.page';

describe('TesteNivelamentoPage', () => {
  let component: TesteNivelamentoPage;
  let fixture: ComponentFixture<TesteNivelamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteNivelamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteNivelamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
