import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HavetoPage } from './haveto.page';

describe('HavetoPage', () => {
  let component: HavetoPage;
  let fixture: ComponentFixture<HavetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HavetoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HavetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
