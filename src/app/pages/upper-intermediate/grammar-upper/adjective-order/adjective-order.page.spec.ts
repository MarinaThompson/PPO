import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjectiveOrderPage } from './adjective-order.page';

describe('AdjectiveOrderPage', () => {
  let component: AdjectiveOrderPage;
  let fixture: ComponentFixture<AdjectiveOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjectiveOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjectiveOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
