import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBodyPage } from './the-body.page';

describe('TheBodyPage', () => {
  let component: TheBodyPage;
  let fixture: ComponentFixture<TheBodyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBodyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
