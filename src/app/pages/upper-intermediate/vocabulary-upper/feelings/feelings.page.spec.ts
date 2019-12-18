import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingsPage } from './feelings.page';

describe('FeelingsPage', () => {
  let component: FeelingsPage;
  let fixture: ComponentFixture<FeelingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
