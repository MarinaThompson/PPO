import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Text33Page } from './text33.page';

describe('Text33Page', () => {
  let component: Text33Page;
  let fixture: ComponentFixture<Text33Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Text33Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Text33Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
