import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPhrasalPage } from './order-phrasal.page';

describe('OrderPhrasalPage', () => {
  let component: OrderPhrasalPage;
  let fixture: ComponentFixture<OrderPhrasalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderPhrasalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPhrasalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
