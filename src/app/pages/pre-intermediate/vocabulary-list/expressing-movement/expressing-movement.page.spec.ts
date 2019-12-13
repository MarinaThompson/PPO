import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpressingMovementPage } from './expressing-movement.page';

describe('ExpressingMovementPage', () => {
  let component: ExpressingMovementPage;
  let fixture: ComponentFixture<ExpressingMovementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpressingMovementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpressingMovementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
