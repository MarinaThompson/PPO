import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsWearPage } from './things-wear.page';

describe('ThingsWearPage', () => {
  let component: ThingsWearPage;
  let fixture: ComponentFixture<ThingsWearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsWearPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsWearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
