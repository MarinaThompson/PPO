import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingsPage } from './things.page';

describe('ThingsPage', () => {
  let component: ThingsPage;
  let fixture: ComponentFixture<ThingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
