import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeUsedtoPage } from './be-usedto.page';

describe('BeUsedtoPage', () => {
  let component: BeUsedtoPage;
  let fixture: ComponentFixture<BeUsedtoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeUsedtoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeUsedtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
