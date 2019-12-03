import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingListPage } from './reading-list.page';

describe('ReadingListPage', () => {
  let component: ReadingListPage;
  let fixture: ComponentFixture<ReadingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
