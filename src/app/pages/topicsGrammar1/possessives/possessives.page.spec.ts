import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossessivesPage } from './possessives.page';

describe('PossessivesPage', () => {
  let component: PossessivesPage;
  let fixture: ComponentFixture<PossessivesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossessivesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossessivesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
