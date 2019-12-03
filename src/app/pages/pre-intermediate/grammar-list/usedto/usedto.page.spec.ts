import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedtoPage } from './usedto.page';

describe('UsedtoPage', () => {
  let component: UsedtoPage;
  let fixture: ComponentFixture<UsedtoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsedtoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedtoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
