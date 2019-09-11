import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittenBeginnerPage } from './written-beginner.page';

describe('WrittenBeginnerPage', () => {
  let component: WrittenBeginnerPage;
  let fixture: ComponentFixture<WrittenBeginnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrittenBeginnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittenBeginnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
