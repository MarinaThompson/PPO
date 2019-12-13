import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTraducaoPage } from './test-traducao.page';

describe('TestTraducaoPage', () => {
  let component: TestTraducaoPage;
  let fixture: ComponentFixture<TestTraducaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTraducaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTraducaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
