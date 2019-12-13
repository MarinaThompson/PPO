import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionVerbsPage } from './action-verbs.page';

describe('ActionVerbsPage', () => {
  let component: ActionVerbsPage;
  let fixture: ComponentFixture<ActionVerbsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionVerbsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionVerbsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
