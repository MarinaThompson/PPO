import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperativesPage } from './imperatives.page';

describe('ImperativesPage', () => {
  let component: ImperativesPage;
  let fixture: ComponentFixture<ImperativesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImperativesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperativesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
