import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestvocPage } from './testvoc.page';

describe('TestvocPage', () => {
  let component: TestvocPage;
  let fixture: ComponentFixture<TestvocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestvocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestvocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
