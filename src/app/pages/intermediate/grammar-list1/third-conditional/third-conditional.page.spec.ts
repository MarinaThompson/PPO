import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdConditionalPage } from './third-conditional.page';

describe('ThirdConditionalPage', () => {
  let component: ThirdConditionalPage;
  let fixture: ComponentFixture<ThirdConditionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdConditionalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdConditionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
