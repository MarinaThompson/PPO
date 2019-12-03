import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPerfectPage } from './past-perfect.page';

describe('PastPerfectPage', () => {
  let component: PastPerfectPage;
  let fixture: ComponentFixture<PastPerfectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastPerfectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPerfectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
