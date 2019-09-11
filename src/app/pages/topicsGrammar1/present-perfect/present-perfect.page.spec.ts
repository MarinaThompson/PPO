import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPerfectPage } from './present-perfect.page';

describe('PresentPerfectPage', () => {
  let component: PresentPerfectPage;
  let fixture: ComponentFixture<PresentPerfectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentPerfectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentPerfectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
