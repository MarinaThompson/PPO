import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibilityPage } from './possibility.page';

describe('PossibilityPage', () => {
  let component: PossibilityPage;
  let fixture: ComponentFixture<PossibilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibilityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
