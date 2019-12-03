import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpmovementPage } from './expmovement.page';

describe('ExpmovementPage', () => {
  let component: ExpmovementPage;
  let fixture: ComponentFixture<ExpmovementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpmovementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpmovementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
