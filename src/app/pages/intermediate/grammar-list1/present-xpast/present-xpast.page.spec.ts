import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentXpastPage } from './present-xpast.page';

describe('PresentXpastPage', () => {
  let component: PresentXpastPage;
  let fixture: ComponentFixture<PresentXpastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentXpastPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentXpastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
