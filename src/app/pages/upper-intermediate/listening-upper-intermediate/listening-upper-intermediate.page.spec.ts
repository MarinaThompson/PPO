import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningUpperIntermediatePage } from './listening-upper-intermediate.page';

describe('ListeningUpperIntermediatePage', () => {
  let component: ListeningUpperIntermediatePage;
  let fixture: ComponentFixture<ListeningUpperIntermediatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningUpperIntermediatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningUpperIntermediatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
