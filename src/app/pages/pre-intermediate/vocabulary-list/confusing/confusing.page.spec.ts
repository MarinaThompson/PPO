import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusingPage } from './confusing.page';

describe('ConfusingPage', () => {
  let component: ConfusingPage;
  let fixture: ComponentFixture<ConfusingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfusingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfusingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
