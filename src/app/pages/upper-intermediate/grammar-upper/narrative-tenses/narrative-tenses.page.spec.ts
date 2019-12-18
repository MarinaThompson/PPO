import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrativeTensesPage } from './narrative-tenses.page';

describe('NarrativeTensesPage', () => {
  let component: NarrativeTensesPage;
  let fixture: ComponentFixture<NarrativeTensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrativeTensesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrativeTensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
