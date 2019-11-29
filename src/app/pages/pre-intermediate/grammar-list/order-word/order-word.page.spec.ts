import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWordPage } from './order-word.page';

describe('OrderWordPage', () => {
  let component: OrderWordPage;
  let fixture: ComponentFixture<OrderWordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderWordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderWordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
