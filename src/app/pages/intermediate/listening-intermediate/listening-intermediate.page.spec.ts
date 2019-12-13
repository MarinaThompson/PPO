import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningIntermediatePage } from './listening-intermediate.page';

describe('ListeningIntermediatePage', () => {
  let component: ListeningIntermediatePage;
  let fixture: ComponentFixture<ListeningIntermediatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningIntermediatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningIntermediatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
