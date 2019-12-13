import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseworkPage } from './housework.page';

describe('HouseworkPage', () => {
  let component: HouseworkPage;
  let fixture: ComponentFixture<HouseworkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseworkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
